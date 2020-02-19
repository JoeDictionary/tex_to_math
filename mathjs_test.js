const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

function nearleyParse(parseString) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  try {
    return parser.feed(parseString).results;
  } catch (error) {
    return `Invalid input: ${parseString}`;
  }
}

MathLive.makeMathField('mathfield', {
  virtualKeyboardMode: 'manual',
  virtualKeyboardTheme: 'material',

  onContentDidChange: mathfield => {
    const ast = MathLive.latexToAST(mathfield.$text());

    const normalizedText = mathfield.$latex();

    console.group("Parse Debug")

    console.log({ normalizedText });
    console.log(`(parsedNormalizedText) ${nearleyParse(normalizedText)}`);
    
    console.groupEnd();
    // console.dir({
    //   "normalizedText": normalizedText,
    //   "parsedNormalizedText": nearleyParse(normalizedText),
    // })

    document.getElementById('latex').innerHTML = normalizedText;
    document.getElementById('results').innerHTML = nearleyParse(normalizedText);
  }
});



// const btn = document.querySelector('.testBtn');
// btn.innerHTML = MathLive.latexToMarkup('\\sqrt{\\placeholder{radicand}}');
// console.log(math.evaluate('sum(2, 2, 2)'));

console.log(Algebrite.run("simplify(1/a+1/b)"));