class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-\'\s]/g, "");
  }

  static titleize(string) {
    let arr = [];
    let exludeWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "and",
      "from",
    ];
    arr = string.split(" ");
    return arr
      .map((word, i) => {
        return exludeWords.includes(word) && i != 0
          ? [word]
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}

console.log(Formatter.capitalize("crocodile"));
console.log(Formatter.sanitize("Doin' Dishes"));
console.log(Formatter.titleize("Maurice a an but of and for at by from end"));
console.log(Formatter.titleize("a tale of two cities"));

