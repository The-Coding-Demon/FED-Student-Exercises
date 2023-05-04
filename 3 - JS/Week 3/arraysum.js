const sumOfArray = document.querySelector("#numbers");
const userInput = document.querySelector("#inputarray");

const userArray = (event) => {
  event.preventDefault();
  const userArray = userInput.value;
  const numberArray = userArray.split(" ");
  const arrayOfNumbers = numberArray.map(Number);
  // console.log(numberArray);
  const evenNumbers = [];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      evenNumbers.push(arrayOfNumbers[i]);
    }
  }
  // console.log(evenNumbers);
  const overallSum = evenNumbers.reduce((acc, total) => acc + total, 0);
  console.log(overallSum);
};

sumOfArray.addEventListener("submit", userArray);
