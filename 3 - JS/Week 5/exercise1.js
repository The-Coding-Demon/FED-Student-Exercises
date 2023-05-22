const userForm = document.querySelector("#largestNumberFormula");
const addingNumberToStorage = document.querySelector("#enterNumber");
const retrievingLargestNumber = document.querySelector("#returnLargestNumber");
const retrieveNumberButton = document.querySelector("#myButton2");

const handleSubmit = (event) => {
  event.preventDefault();
  const userInput = addingNumberToStorage.value;
  addNumberTakeLargestFromStorage(userInput);
};

let arrayOfNumber = [];

const addNumberTakeLargestFromStorage = (input) => {
  arrayOfNumber.push(input);
  localStorage.setItem("Numbers", JSON.stringify(arrayOfNumber));
  addingNumberToStorage.value = "";
};

const largestNumberRetriever = () => {
  const getLocalStorage = JSON.parse(localStorage.getItem("Numbers"));
  const maxNumber = Math.max(...getLocalStorage);
  retrievingLargestNumber.value = maxNumber;
};

const checkList = () => {
  const getNums = JSON.parse(localStorage.getItem("Numbers"));
  if (getNums.length > 0) {
    arrayOfNumber = getNums;
  }
};

userForm.addEventListener("submit", handleSubmit);
retrieveNumberButton.addEventListener("click", largestNumberRetriever);
window.addEventListener("load", checkList);
