// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["AS"], "postprocess": function(d) {return d[0]; }},
    {"name": "P$string$1", "symbols": [{"literal":"\\"}, {"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$string$2", "symbols": [{"literal":"\\"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P", "symbols": ["P$string$1", "AS", "P$string$2"], "postprocess": function(d) {return d[1]; }},
    {"name": "P", "symbols": ["N"], "postprocess": id},
    {"name": "E", "symbols": ["P", {"literal":"^"}, "E"], "postprocess": function(d) {return Math.pow(d[0], d[2]); }},
    {"name": "E", "symbols": ["P"], "postprocess": id},
    {"name": "MD$string$1", "symbols": [{"literal":"\\"}, {"literal":"c"}, {"literal":"d"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MD", "symbols": ["MD", "MD$string$1", "E"], "postprocess": function(d) {return d[0]*d[2]; }},
    {"name": "MD$string$2", "symbols": [{"literal":"\\"}, {"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"{"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MD$string$3", "symbols": [{"literal":"}"}, {"literal":"{"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MD", "symbols": ["MD$string$2", "MD", "MD$string$3", "E", {"literal":"}"}], "postprocess": function(d) {return d[1]/d[3]; }},
    {"name": "MD", "symbols": ["E"], "postprocess": id},
    {"name": "AS", "symbols": ["AS", {"literal":"+"}, "MD"], "postprocess": function(d) {return d[0]+d[2]; }},
    {"name": "AS", "symbols": ["AS", {"literal":"-"}, "MD"], "postprocess": function(d) {return d[0]-d[2]; }},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "N", "symbols": ["float"], "postprocess": id},
    {"name": "N$string$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$1", "P"], "postprocess": function(d) {return Math.sin(d[1]); }},
    {"name": "N$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$2", "P"], "postprocess": function(d) {return Math.cos(d[1]); }},
    {"name": "N$string$3", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$3", "P"], "postprocess": function(d) {return Math.tan(d[1]); }},
    {"name": "N$string$4", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$4", "P"], "postprocess": function(d) {return Math.asin(d[1]); }},
    {"name": "N$string$5", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$5", "P"], "postprocess": function(d) {return Math.acos(d[1]); }},
    {"name": "N$string$6", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$6", "P"], "postprocess": function(d) {return Math.atan(d[1]); }},
    {"name": "N$string$7", "symbols": [{"literal":"\\"}, {"literal":"p"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$7"], "postprocess": function(d) {return Math.PI; }},
    {"name": "N", "symbols": [{"literal":"e"}], "postprocess": function(d) {return Math.E; }},
    {"name": "N$string$8", "symbols": [{"literal":"s"}, {"literal":"q"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$8", "P"], "postprocess": function(d) {return Math.sqrt(d[1]); }},
    {"name": "N$string$9", "symbols": [{"literal":"l"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$9", "P"], "postprocess": function(d) {return Math.log(d[1]); }},
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": function(d) {return parseFloat(d[0] + d[1] + d[2])}},
    {"name": "float", "symbols": ["int"], "postprocess": function(d) {return parseInt(d[0])}},
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
