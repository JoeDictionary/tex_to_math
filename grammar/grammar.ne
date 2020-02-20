# `main` is the nonterminal that nearley tries to parse, so
# we define it first.
# https://github.com/kach/nearley/blob/master/docs/md/grammar.md

@include "macros.ne"



main -> _ AS _ {% ([a, b, c]) => b %}

# We define each level of precedence as a nonterminal.

# Parentheses
P -> 
	bracket[AS]			{% ([a]) => `(${a})` %}
	| N             {% id %}

# Exponents
E -> 
	P _ "^" _ (E | brace[E] {% ([a]) => `(${a})` %})		{% ([a, b, c, d, e]) => `${a}^${e}` %}
	| P             																		{% id %}

# Multiplication and division
MD -> 
	MD _ ("\\cdot" | "*") _ E					{% ([a, b, c, d, e]) => `${a}*${e}` %}
	| "\\frac"  brace[MD]  brace[E]		{% ([a, b, c]) => `${a}/${e}` %}
	| MD "/" E												{% ([a, b, c]) => `${a}/${c}` %}
	| E                         			{% id %}

# Addition and subtraction
AS -> 
	AS _ "+" _ MD				{% ([a, b, c, d, e]) => `${a}+${e}` %}
	| AS _ "-" _ MD     {% ([a, b, c, d, e]) => `${a}-${e}` %}
	| MD            		{% id %}

# A number or a function of a number
N -> 
	float																		{% id %}
	| "\\sin" _ bracket[P]									{% ([a, b, c]) => `sin(${c})` %}
	| "\\cos" _ bracket[P]									{% ([a, b, c]) => `cos(${c})` %}
	| "\\tan" _ bracket[P]									{% ([a, b, c]) => `tan(${c})` %}
	| "\\arcsin" _ bracket[P]								{% ([a, b, c]) => `arcsin(${c})` %}
	| "\\arccos" _ bracket[P]								{% ([a, b, c]) => `arccos(${c})` %}
	| "\\arctan" _ bracket[P]								{% ([a, b, c]) => `arctan(${c})` %}
	| "\\asin" _ bracket[P]									{% ([a, b, c]) => `asin(${c})` %}
	| "\\acos" _ bracket[P]									{% ([a, b, c]) => `acos(${c})` %}
	| "\\atan" _ bracket[P]									{% ([a, b, c]) => `atan(${c})` %}

	| "\\pi"																{% ([a]) => "PI" %}
	| "\\exponentialE"  										{% ([a]) => "E" %}
	| "\\sqrt" _ brace[P]										{% ([a, b, c]) => `sqrt(${c})` %}
	| "\\ln" _ P														{% ([a, b, c]) => `ln(${c})` %}

	# int ^{200}_{100}
	| "\\int ^" (P | brace[P]) "_" (P | brace[P]) P 		{% ([_1, a, _2, b, c]) => `defint(${c}, x, ${b}, ${a})` %}

	| "\\binom" brace[P] brace[P]						{% ([a, b, c]) => `choose(${b}, ${c})` %}

	| "\\sum ^" (P | brace[P]) "_{" var "=" P "}" P 		{% ([_1, a, _2, b, _3, c, _4, d]) => `sum(${d}, ${b}, ${c}, ${a})`%}
	| "\\prod ^{" P "}_{" var "=" P "}" P 	{% ([_1, a, _2, b, _3, c, _4, d]) => `product(${d}, ${b}, ${c}, ${a})`%}

# I use `float` to basically mean a number with a decimal point in it
float ->
	int "." int   	{% ([a, b, c]) => `${a}${b}${c}` %}
	| int           {% ([a]) => a %}
	| [a-z]					{% id %}

int -> 
	[0-9]:+		{% function(d) {return d[0].join(""); } %}

var ->
	[a-z]			{% id %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*         {% function(d) {return null; } %}
