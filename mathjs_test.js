
// const nearley = require("nearley")
// const grammar = require("./grammar.js")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
console.log(parser.feed("\\frac{1}{2}").results);

MathLive.makeMathField('mathfield' , {
    onContentDidChange: mathfield => {
            const ast = MathLive.latexToAST(mathfield.$text());
            console.log(JSON.stringify(ast));
            document.getElementById('latex').innerHTML = mathfield.$text();
            document.getElementById('results').innerHTML = parser.feed(mathfield.$text());
    }
});



// const node = math.parse("1/2").evaluate()
// console.log(node);

// const expression = MathLive.latexToAST("\\frac{1}{2}")
// console.log(expression);
