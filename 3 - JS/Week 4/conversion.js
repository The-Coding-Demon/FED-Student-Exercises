const sumOfTemp = document.querySelector("#tempBar");
const userInput = document.querySelector("#temperatureBox");

const userTemp = (event) => {
  event.preventDefault();
  const userResult = document.querySelector("#showResult");
  const userTemp = userInput.value;
  console.log(userTemp);

  const fahRadio = document.querySelector("#fBox");
  if (fahRadio.checked) {
    userResult.innerHTML = `${((userTemp - 32) * 5) / 9}F`;
  } else {
    userResult.innerHTML = `${(userTemp * 9) / 5 + 32}C`;
  }
};

sumOfTemp.addEventListener("submit", userTemp);
