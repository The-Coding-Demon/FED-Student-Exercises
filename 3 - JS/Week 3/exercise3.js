const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(" ");
  // console.log(splitStr);

  for (i = 0; i < splitStr.length; i++) {
    const firstLetter = splitStr[i].charAt(0);
    const upperCaseFirstLetter = firstLetter.toUpperCase();
    const seperatedWord = splitStr[i].slice(1);

    const fullSentence = upperCaseFirstLetter + seperatedWord;
    // console.log(fullSentence);
    splitStr[i] = fullSentence;
  }
  const fullWord = splitStr.join(" ");
  console.log(fullWord);
};

titleCase("the legend of zelda: hyrule historia");
