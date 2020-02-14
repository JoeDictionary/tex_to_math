import sympy as sp
from sympy.parsing.sympy_parser import parse_expr
from sympy.parsing.latex import parse_latex


print(parse_latex(r"\int_1^2{1+3}"))