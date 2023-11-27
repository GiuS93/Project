const { spawn } = require('child_process');

describe('App Test', () => {
  it('should analyze a file correctly', (done) => {
    const filePath = './test/test.txt'; // Aggiorna il percorso del file di test

    // Esegui l'applicazione come processo separato
    const process = spawn('node', ['app.js', filePath]);

    let stdout = '';
    process.stdout.on('data', (data) => {
      stdout += data;
    });

    process.on('close', (code) => {
      // Verifica che l'esecuzione sia avvenuta senza errori
      expect(code).toBe(0);

      // Verifica il risultato di output
      const outputLines = stdout.trim().split('\n');
      console.log(outputLines);

      //Modifica questo valore in base all'implementazione
      expect(outputLines.length).toBeGreaterThanOrEqual(4);
      expect(+outputLines[0].split(':')[1].trim()).toBe(19);
      expect(+outputLines[1].split(':')[1].trim()).toBe(102);
      expect(+outputLines[2].split(':')[1].trim()).toBe(18);

      done();
    });
  });
});
