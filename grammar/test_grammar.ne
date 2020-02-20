@include "macros.ne"



main -> _ AS _ {% ([a, b, c]) => b %}

# Parentheses
P -> 
	bracket[AS]		{% ([a]) => `(${a})` %}
	| N             {% id %}

# Exponents
E -> 
	P                       {% id %}
	| P _ "^" _ E			{% ([a, b, c, d, e]) => `${a}^(${e})` %}
	| P _ "^" _ brace[E]	{% ([a, b, c, d, e]) => `${a}^(${e})` %}

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


N ->
    float
    | "\\sum{" P "}{" var "=" P "}" P 		{% ([_1, a, _2, b, _3, c, _4, d]) => `sum(${d}, ${b}, ${c}, ${a})`%}



# I use `float` to basically mean a number with a decimal point in it
float ->
	# int "." int   	{% ([a, b, c]) => `${a}${b}${c}` %}
	int             {% ([a]) => a %}
	| var			{% id %}

int -> 
	[0-9]:+		{% function(d) {return d[0].join(""); } %}

var ->
	[a-z]			{% id %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*         {% function(d) {return null; } %}