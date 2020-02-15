# `main` is the nonterminal that nearley tries to parse, so
# we define it first.
# The _'s are defined as whitespace below. This is a mini-
# -idiom.

main -> AS {% function(d) {return d[0]; } %}

# We define each level of precedence as a nonterminal.

# Parentheses
P -> 
	`\left(` AS `\right)` {% function(d) {return d[1]; } %}
	| N             {% id %}

# Exponents
E -> P "^" E        {% function(d) {return Math.pow(d[0], d[2]); } %}
	| P             {% id %}

# Multiplication and division
MD -> MD 
	`\cdot` E                   {% function(d) {return d[0]*d[2]; } %}
	| `\frac{` MD `}{` E `}`    {% function(d) {return d[1]/d[3]; } %}
	| E                         {% id %}

# Addition and subtraction
AS -> 
	AS "+" MD       {% function(d) {return d[0]+d[2]; } %}
	| AS "-" MD     {% function(d) {return d[0]-d[2]; } %}
	| MD            {% id %}

# A number or a function of a number
N -> float          {% id %}
	| "sin" P       {% function(d) {return Math.sin(d[1]); } %}
	| "cos" P       {% function(d) {return Math.cos(d[1]); } %}
	| "tan" P       {% function(d) {return Math.tan(d[1]); } %}
	
	| "asin" P      {% function(d) {return Math.asin(d[1]); } %}
	| "acos" P      {% function(d) {return Math.acos(d[1]); } %}
	| "atan" P      {% function(d) {return Math.atan(d[1]); } %}

	| `\pi`         {% function(d) {return Math.PI; } %}
	| "e"           {% function(d) {return Math.E; } %}
	| "sqrt" P      {% function(d) {return Math.sqrt(d[1]); } %}
	| "ln" P        {% function(d) {return Math.log(d[1]); }  %}

# I use `float` to basically mean a number with a decimal point in it
float ->
	  int "." int   {% function(d) {return parseFloat(d[0] + d[1] + d[2])} %}
	| int           {% function(d) {return parseInt(d[0])} %}

int -> [0-9]:+      {% function(d) {return d[0].join(""); } %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*         {% function(d) {return null; } %}