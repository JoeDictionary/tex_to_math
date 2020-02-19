

bracket[X] -> 
	("\\left(" | "\\mleft(") _ $X _ ("\\right)" | "\\mright)") {% ([a, b, c, d, e]) => c %}

brace[X] -> "{" _ $X _ "}" {% ([a, b, c, d, e]) => c %}