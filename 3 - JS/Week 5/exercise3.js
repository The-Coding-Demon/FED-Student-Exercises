const userForm = document.querySelector("#searchPrime");
const primeFinder = document.querySelector("#numberInput");

const handleSubmit = (event) => {
  event.preventDefault();
  const userInput = primeFinder.value;
  primeNoCheck(userInput);
};

const primeNoCheck = (input) => {
  if (input < 2) {
    alert(`${num} is not prime`);
    return;
  }
  for (i = 2; i < input; i++) {
    if (input % i == 0) {
      alert(`"False ${input} is not a Prime Number"`);
      return;
    } else {
      alert(`"Correct ${input} is a Prime Number"`);
      return;
    }
  }
};
userForm.addEventListener("submit", handleSubmit);
