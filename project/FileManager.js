const fs = require('fs');
const axios = require('axios');

class FileManager {
  constructor() {
    if (FileManager.instance) {
      return FileManager.instance;
    }

    this.content = '';
    FileManager.instance = this;
  }

  async readFile(filePath) {
    try {
      if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
        const response = await axios.get(filePath);
        this.content = response.data;
      } else {
        this.content = fs.readFileSync(filePath, 'utf-8');
      }

      return this.content;
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  getContent() {
    return this.content;
  }
}

module.exports = { FileManager, FileManagerInstance: new FileManager() };
