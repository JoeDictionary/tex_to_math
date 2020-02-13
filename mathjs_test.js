
MathLive.makeMathField('mathfield' , {
    onContentDidChange: mathfield => {
            const ast = MathLive.latexToAST(mathfield.$text());
            console.log(JSON.stringify(ast));
            // document.getElementById('output').innerHTML = JSON.stringify(ast);
    }
});

// const node = math.parse("1/2").evaluate()
// console.log(node);

// const expression = MathLive.latexToAST("\\frac{1}{2}")
// console.log(expression);
