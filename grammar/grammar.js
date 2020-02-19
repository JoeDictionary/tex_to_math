// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["_", "AS", "_"], "postprocess": ([a, b, c]) => b},
    {"name": "P$macrocall$2", "symbols": ["AS"]},
    {"name": "P$macrocall$1$subexpression$1$string$1", "symbols": [{"literal":"\\"}, {"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$macrocall$1$subexpression$1", "symbols": ["P$macrocall$1$subexpression$1$string$1"]},
    {"name": "P$macrocall$1$subexpression$1$string$2", "symbols": [{"literal":"\\"}, {"literal":"m"}, {"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$macrocall$1$subexpression$1", "symbols": ["P$macrocall$1$subexpression$1$string$2"]},
    {"name": "P$macrocall$1$subexpression$2$string$1", "symbols": [{"literal":"\\"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$macrocall$1$subexpression$2", "symbols": ["P$macrocall$1$subexpression$2$string$1"]},
    {"name": "P$macrocall$1$subexpression$2$string$2", "symbols": [{"literal":"\\"}, {"literal":"m"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$macrocall$1$subexpression$2", "symbols": ["P$macrocall$1$subexpression$2$string$2"]},
    {"name": "P$macrocall$1", "symbols": ["P$macrocall$1$subexpression$1", "_", "P$macrocall$2", "_", "P$macrocall$1$subexpression$2"], "postprocess": ([a, b, c, d, e]) => c},
    {"name": "P", "symbols": ["P$macrocall$1"], "postprocess": ([a]) => `(${a})`},
    {"name": "P", "symbols": ["N"], "postprocess": id},
    {"name": "E", "symbols": ["P", "_", {"literal":"^"}, "_", "E"], "postprocess": ([a, b, c, d, e]) => `${a}^(${e})`},
    {"name": "E$macrocall$2", "symbols": ["E"]},
    {"name": "E$macrocall$1", "symbols": [{"literal":"{"}, "_", "E$macrocall$2", "_", {"literal":"}"}], "postprocess": ([a, b, c, d, e]) => c},
    {"name": "E", "symbols": ["P", "_", {"literal":"^"}, "_", "E$macrocall$1"], "postprocess": ([a, b, c, d, e]) => `${a}^(${e})`},
    {"name": "E", "symbols": ["P"], "postprocess": id},
    {"name": "MD$subexpression$1$string$1", "symbols": [{"literal":"\\"}, {"literal":"c"}, {"literal":"d"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MD$subexpression$1", "symbols": ["MD$subexpression$1$string$1"]},
    {"name": "MD$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "MD", "symbols": ["MD", "_", "MD$subexpression$1", "_", "E"], "postprocess": ([a, b, c, d, e]) => `${a}*${e}`},
    {"name": "MD$string$1", "symbols": [{"literal":"\\"}, {"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MD$macrocall$2", "symbols": ["MD"]},
    {"name": "MD$macrocall$1", "symbols": [{"literal":"{"}, "_", "MD$macrocall$2", "_", {"literal":"}"}], "postprocess": ([a, b, c, d, e]) => c},
    {"name": "MD$macrocall$4", "symbols": ["E"]},
    {"name": "MD$macrocall$3", "symbols": [{"literal":"{"}, "_", "MD$macrocall$4", "_", {"literal":"}"}], "postprocess": ([a, b, c, d, e]) => c},
    {"name": "MD", "symbols": ["MD$string$1", "MD$macrocall$1", "MD$macrocall$3"], "postprocess": ([a, b, c]) => `${a}/${e}`},
    {"name": "MD", "symbols": ["MD", {"literal":"/"}, "E"], "postprocess": ([a, b, c]) => `${a}/${c}`},
    {"name": "MD", "symbols": ["E"], "postprocess": id},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"+"}, "_", "MD"], "postprocess": ([a, b, c, d, e]) => `${a}+${e}`},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"-"}, "_", "MD"], "postprocess": ([a, b, c, d, e]) => `${a}-${e}`},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "N", "symbols": ["float"], "postprocess": id},
    {"name": "N$string$1", "symbols": [{"literal":"\\"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$1", "_", "P"], "postprocess": ([a, b, c]) => `sin${c}`},
    {"name": "N$string$2", "symbols": [{"literal":"\\"}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$2", "_", "P"], "postprocess": ([a, b, c]) => `cos${c}`},
    {"name": "N$string$3", "symbols": [{"literal":"\\"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$3", "_", "P"], "postprocess": ([a, b, c]) => `tan${c}`},
    {"name": "N$string$4", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$4", "_", "P"], "postprocess": ([a, b, c]) => `asin${c}`},
    {"name": "N$string$5", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$5", "_", "P"], "postprocess": ([a, b, c]) => `acos${c}`},
    {"name": "N$string$6", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$6", "_", "P"], "postprocess": ([a, b, c]) => `atan${c}`},
    {"name": "N$string$7", "symbols": [{"literal":"\\"}, {"literal":"p"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$7"], "postprocess": ([a]) => "PI"},
    {"name": "N$string$8", "symbols": [{"literal":"\\"}, {"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$8"], "postprocess": ([a]) => "E"},
    {"name": "N$string$9", "symbols": [{"literal":"\\"}, {"literal":"s"}, {"literal":"q"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$macrocall$2", "symbols": ["P"]},
    {"name": "N$macrocall$1", "symbols": [{"literal":"{"}, "_", "N$macrocall$2", "_", {"literal":"}"}], "postprocess": ([a, b, c, d, e]) => c},
    {"name": "N", "symbols": ["N$string$9", "_", "N$macrocall$1"], "postprocess": ([a, b, c]) => `sqrt(${c})`},
    {"name": "N$string$10", "symbols": [{"literal":"\\"}, {"literal":"l"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$10", "_", "P"], "postprocess": ([a, b, c]) => `ln(${c})`},
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": ([a, b, c]) => `${a}${b}${c}`},
    {"name": "float", "symbols": ["int"], "postprocess": ([a]) => a},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": function(d) {return d[0].join(""); }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null; }}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
