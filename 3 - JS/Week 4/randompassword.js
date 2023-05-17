const passwordCheck = document.querySelector("#passwordChecker");
const passwordInput = document.querySelector("#inputPassword");

const userInput = (event) => {
  event.preventDefault();
  const userInput = passwordInput.value;
  passwordExaminer(userInput);
};

const passwordExaminer = (input) => {
  console.log(input);
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  if (regex.test(input)) {
    alert("Strong Password");
  } else {
    alert(
      `Insufficient-characters - The password must be at least 8 characters long. Include a combination of Numbers, letters and have atleast one special character from the following ., +, *, ?, ^, $, (, ), [, ], {, }, \\`
    );
  }
};

passwordCheck.addEventListener("submit", userInput);
