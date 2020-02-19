# `main` is the nonterminal that nearley tries to parse, so
# we define it first.
# https://github.com/kach/nearley/blob/master/docs/md/grammar.md

@include "macros.ne"



main -> _ AS _ {% ([a, b, c]) => b %}

# We define each level of precedence as a nonterminal.

# Parentheses
P -> 
	bracket[AS]		{% ([a]) => a %}
	| N             {% id %}

# Exponents
E -> P _ "^" _ E	{% ([a, b, c, d, e]) => Math.pow(a, e) %}
	| P             {% id %}

# Multiplication and division
MD -> 
	MD _ "\\cdot" _ E					{% ([a, b, c, d, e]) => a*e %}
	| "\\frac"  brace[MD]  brace[E]		{% ([a, b, c]) => b/c %}
	| E                         		{% id %}

# Addition and subtraction
AS -> 
	AS _ "+" _ MD		{% ([a, b, c, d, e]) => a+e %}
	| AS _ "-" _ MD     {% ([a, b, c, d, e]) => a-e %}
	| MD            	{% id %}

# A number or a function of a number
N -> float			{% id %}
	| "\\sin" _ P		{% ([a, b, c]) => Math.sin(c) %}
	| "\\cos" _ P		{% ([a, b, c]) => Math.cos(c) %}
	| "\\tan" _ P		{% ([a, b, c]) => Math.tan(c) %}
	
	| "asin" _ P	{% ([a, b, c]) => Math.asin(c) %}
	| "acos" _ P	{% ([a, b, c]) => Math.acos(c) %}
	| "atan" _ P	{% ([a, b, c]) => Math.atan(c) %}

	| "\\pi"			{% ([a]) => Math.PI %}
	| "\\exponentialE"  {% ([a]) => Math.E %}
	| "\\sqrt" _ P		{% ([a, b, c]) => Math.sqrt(c) %}
	| "\\ln" _ P		{% ([a, b, c]) => Math.log(c) %}

# I use `float` to basically mean a number with a decimal point in it
float ->
	  int "." int   {% ([a, b, c]) => parseFloat(a + b + c) %}
	| int           {% ([a]) => parseInt(a) %}

int -> [0-9]:+      {% function(d) {return d[0].join(""); } %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*         {% function(d) {return null; } %}
