function analyzeFile(content) {
  const words = content.split(/\s+/).filter((word) => word.length > 0);
  const letters = content.replace(/[^a-zA-Z]/g, '').length;
  const spaces = content.split(' ').length - 1;

  const wordCount = words.length;

  const wordOccurrences = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  const repeatedWords = Object.entries(wordOccurrences)
    .filter(([word, count]) => count > 10)
    .map(([word, count]) => `${word}: ${count} times`);

  return {
    wordCount,
    letters,
    spaces,
    repeatedWords,
  };
}

module.exports = { analyzeFile };
