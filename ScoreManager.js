
const fs = require('fs');

class ScoreManager {
  constructor(filename) {
    this.filename = filename;
    this.scores = this.loadScores();
  }

  loadScores() {
    if (fs.existsSync(this.filename)) {
      let rawData = fs.readFileSync(this.filename);
      return JSON.parse(rawData);
    } else {
      return [];
    }
  }

  updateScores(score) {
    this.scores.push(score);
    fs.writeFileSync(this.filename, JSON.stringify(this.scores, null, 2));
  }
}

module.exports = ScoreManager;