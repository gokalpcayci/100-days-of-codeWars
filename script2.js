// Jaden Smith, the son of Will Smith, is the star of films such as
// The Karate Kid (2010) and After Earth (2013). Jaden is also known
// for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize each word, check out how contractions are expected
// to be in the example below.
// Your task is to convert strings to how they would be written
// by Jaden Smith. The strings are actual quotes from Jaden Smith,
//  but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// take the string and put it in an array. every word is an array element now
//every element's first letter will be uppercase
// return the new string

String.prototype.toJadenCase = function () {
  const arr = this.split(' ');
  const newArr = [];
  for (let elem of arr) {
    elem = elem[0].toUpperCase() + elem.slice(1).toLowerCase();
    newArr.push(elem);
  }
  return newArr.join(' ');
};
