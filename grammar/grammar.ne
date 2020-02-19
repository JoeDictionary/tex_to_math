# `main` is the nonterminal that nearley tries to parse, so
# we define it first.
# https://github.com/kach/nearley/blob/master/docs/md/grammar.md

@include "macros.ne"



main -> _ AS _ {% ([a, b, c]) => b %}

# We define each level of precedence as a nonterminal.

# Parentheses
P -> 
	bracket[AS]		{% ([a]) => `(${a})` %}
	| N             {% id %}

# Exponents
E -> 
	P _ "^" _ E				{% ([a, b, c, d, e]) => `${a}^(${e})` %}
	| P _ "^" _ brace[E]	{% ([a, b, c, d, e]) => `${a}^(${e})` %}
	| P             		{% id %}

# Multiplication and division
MD -> 
	MD _ ("\\cdot" | "*") _ E					{% ([a, b, c, d, e]) => `${a}*${e}` %}
	| "\\frac"  brace[MD]  brace[E]		{% ([a, b, c]) => `${a}/${e}` %}
	| MD "/" E							{% ([a, b, c]) => `${a}/${c}` %}
	| E                         		{% id %}

# Addition and subtraction
AS -> 
	AS _ "+" _ MD		{% ([a, b, c, d, e]) => `${a}+${e}` %}
	| AS _ "-" _ MD     {% ([a, b, c, d, e]) => `${a}-${e}` %}
	| MD            	{% id %}

# A number or a function of a number
N -> float			{% id %}
	| "\\sin" _ P		{% ([a, b, c]) => `sin${c}` %}
	| "\\cos" _ P		{% ([a, b, c]) => `cos${c}` %}
	| "\\tan" _ P		{% ([a, b, c]) => `tan${c}` %}
	
	| "asin" _ P	{% ([a, b, c]) => `asin${c}` %}
	| "acos" _ P	{% ([a, b, c]) => `acos${c}` %}
	| "atan" _ P	{% ([a, b, c]) => `atan${c}` %}

	| "\\pi"				{% ([a]) => "PI" %}
	| "\\exponentialE"  	{% ([a]) => "E" %}
	| "\\sqrt" _ brace[P]	{% ([a, b, c]) => `sqrt(${c})` %}
	| "\\ln" _ P			{% ([a, b, c]) => `ln(${c})` %}

# I use `float` to basically mean a number with a decimal point in it
float ->
	  int "." int   {% ([a, b, c]) => `${a}${b}${c}` %}
	| int           {% ([a]) => a %}

int -> [0-9]:+      {% function(d) {return d[0].join(""); } %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*         {% function(d) {return null; } %}