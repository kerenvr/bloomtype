export default function getRandomWords(words, count) {
    let randomWords = [];

    for (let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
    }
  
    return randomWords;
}
