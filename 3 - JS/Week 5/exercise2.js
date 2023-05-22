const userForm = document.querySelector("#removeVowels");
const vowelRemover = document.querySelector("#enterString");
const finalStringEntry = document.querySelector("#finalString");

const handleSubmit = (event) => {
  event.preventDefault();
  const userInput = vowelRemover.value;
  vowelChecker(userInput);
};

const vowelChecker = (str) => {
  console.log(str);
  const vowelsGone = str.replace(/[a|e|i|o|u]/g, "");
  console.log(vowelsGone);
  vowelRemover.value = "";
  finalStringEntry.value = vowelsGone;
};

userForm.addEventListener("submit", handleSubmit);
