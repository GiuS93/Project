const { FileManagerInstance } = require('./FileManager');
const { analyzeFile } = require('./FileAnalyzer');

async function main() {
  try {
    const filePath = process.argv[2];

    if (filePath === '--text') {
      // Se l'opzione --text è presente, leggi il testo fornito come argomento successivo
      const textToAnalyze = process.argv.slice(3).join(' ');
      const analysisResult = analyzeFile(textToAnalyze);

      console.log('Word count:', analysisResult.wordCount);
      console.log('Letter count:', analysisResult.letters);
      console.log('Space count:', analysisResult.spaces);
      console.log('Repeated words:', analysisResult.repeatedWords.join(', '));

      return;
    }

    if (!filePath) {
      console.error('Usage: node app.js <filePath or URL>');
      return;
    }

    const fileContent = await FileManagerInstance.readFile(filePath);

    const analysisResult = analyzeFile(fileContent);

    console.log('Word count:', analysisResult.wordCount);
    console.log('Letter count:', analysisResult.letters);
    console.log('Space count:', analysisResult.spaces);
    console.log('Repeated words:', analysisResult.repeatedWords.join(', '));
  } catch (error) {
    console.error(error.message);
  }
}

main();
