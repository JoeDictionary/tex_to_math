const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

function nearleyParse(parseString) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
    try{
        return parser.feed(parseString).results
    }
    catch(error){
        return `Invalid input: ${parseString}`
    }
}

const testString = "\\pi"
console.log(nearleyParse(testString));

MathLive.makeMathField('mathfield' , {
    onContentDidChange: mathfield => {
            const ast = MathLive.latexToAST(mathfield.$text());
            
            const normalizedText = mathfield.$latex()
            console.log(normalizedText);
            console.log(testString === normalizedText);

            document.getElementById('latex').innerHTML = normalizedText;
            document.getElementById('results').innerHTML = nearleyParse(normalizedText);
    }
});



// const node = math.parse("1/2").evaluate()
// console.log(node);

// const expression = MathLive.latexToAST("\\frac{1}{2}")
// console.log(expression);
