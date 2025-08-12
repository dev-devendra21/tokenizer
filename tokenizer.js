import fs from "fs";

class Tokenizer {
  constructor(vocabFilePath = "./vocab.json") {
    this.vocabFilePath = vocabFilePath;
    this.vocab = {};
    this.reverseVocab = {};
    this.loadVocab();
    this.textEncoder = new TextEncoder();
  }

  loadVocab() {
    if (fs.existsSync(this.vocabFilePath)) {
      try {
        const data = fs.readFileSync(this.vocabFilePath, "utf8");
        this.vocab = JSON.parse(data);
        this.reverseVocab = Object.fromEntries(
          Object.entries(this.vocab).map(([word, id]) => [id, word])
        );
      } catch (e) {
        console.error("Error reading vocab file as there is no data.");
        this.vocab = {};
        this.reverseVocab = {};
      }
    } else {
      fs.writeFileSync(this.vocabFilePath, JSON.stringify({}), "utf8");
    }
  }

  saveVocab() {
    fs.writeFileSync(
      this.vocabFilePath,
      JSON.stringify(this.vocab, null, 2),
      "utf8"
    );
  }

  generateTokenIdFromWord(word) {
    if (word === "") return 1;

    const bytes = this.textEncoder.encode(word);
    let sum = 0;
    for (const b of bytes) {
      sum += b;
    }
    return sum;
  }

  encode(text) {
    const words = text.split(/\s+/);
    const tokenIds = [];

    for (const word of words) {
      if (!this.vocab[word]) {
        let newId = this.generateTokenIdFromWord(word);

        while (
          this.reverseVocab[newId] !== undefined &&
          this.reverseVocab[newId] !== word
        ) {
          newId += 1;
        }

        this.vocab[word] = newId;
        this.reverseVocab[newId] = word;
        this.saveVocab();
      }
      tokenIds.push(this.vocab[word]);
    }

    return tokenIds;
  }

  decode(tokenIds) {
    return tokenIds.map((id) => this.reverseVocab[id] || "<UNK>").join(" ");
  }
}

export default Tokenizer;
