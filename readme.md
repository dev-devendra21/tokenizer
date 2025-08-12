# Tokenizer UI

An interactive tokenizer application that allows users to **encode text into tokens** and **decode tokens back to text**. Built with **Node.js** (server) and Html for frontend.

---

## ✨ Features

- **Text to Tokens** → Enter a sentence, get an array of token IDs.
- **Tokens to Text** → Enter token IDs, get the decoded text.
- **Dynamic Vocabulary** → Learns new words automatically when encoding.

---

## 📂 Project Structure

```
📁 Tokenizer
 ├── 📁 public
 │   ├── index.html    # Frontend UI
 │
 ├── index.js          # Node.js server entry
 ├── tokenizer.js      # Tokenizer logic
 ├── vocab.json        # Vocabulary storage
 └── README.md         # Project documentation
```

---

## 🚀 Setup & Run

### 1️⃣ Change Directory

```bash
cd tokenizer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
npm run dev
    or
npm start
```

### 4️⃣ Open in Browser

Visit:

```
http://localhost:3000
```

---

## 🎯 How It Works

1. **Encoding**

   - User enters text in the **Text to Tokens** box.
   - Tokenizer checks each word in `vocab.json`.
   - If a word is new, it's added to the vocabulary.
   - Returns an array of token IDs.

2. **Decoding**

   - User enters token IDs (comma-separated) in the **Tokens to Text** box.
   - Tokenizer maps each ID back to its corresponding word.
   - Returns the decoded sentence.

---

## 🖼 Example

**Input (Text → Tokens):**

```
Hello World
```

**Output:**

```
[100, 101]
```

**Input (Tokens → Text):**

```
100, 101
```

**Output:**

```
Hello World
```

---

## 🎨 UI Preview

- Two panels: **Encode** and **Decode**

---

## 📜 License

MIT License. Free to use and modify.
