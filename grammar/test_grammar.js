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
    {"name": "E", "symbols": ["P"], "postprocess": id},
    {"name": "E", "symbols": ["P", "_", {"literal":"^"}, "_", "E"], "postprocess": ([a, b, c, d, e]) => `${a}^(${e})`},
    {"name": "E$macrocall$2", "symbols": ["E"]},
    {"name": "E$macrocall$1", "symbols": [{"literal":"{"}, "_", "E$macrocall$2", "_", {"literal":"}"}], "postprocess": ([a, b, c, d, e]) => c},
    {"name": "E", "symbols": ["P", "_", {"literal":"^"}, "_", "E$macrocall$1"], "postprocess": ([a, b, c, d, e]) => `${a}^(${e})`},
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
    {"name": "N", "symbols": ["float"]},
    {"name": "N$string$1", "symbols": [{"literal":"\\"}, {"literal":"s"}, {"literal":"u"}, {"literal":"m"}, {"literal":"{"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$string$2", "symbols": [{"literal":"}"}, {"literal":"{"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$1", "P", "N$string$2", "var", {"literal":"="}, "P", {"literal":"}"}, "P"], "postprocess": ([_1, a, _2, b, _3, c, _4, d]) => `sum(${d}, ${b}, ${c}, ${a})`},
    {"name": "float", "symbols": ["int"], "postprocess": ([a]) => a},
    {"name": "float", "symbols": ["var"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": function(d) {return d[0].join(""); }},
    {"name": "var", "symbols": [/[a-z]/], "postprocess": id},
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
