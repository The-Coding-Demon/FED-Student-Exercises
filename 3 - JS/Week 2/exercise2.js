const newPrompt = () => {
  let randomNumber = Math.ceil(Math.random() * 10);
  let userPrompt = prompt("");
  if (userPrompt == randomNumber) {
    console.log("You guessed the number");
  } else if (userPrompt < randomNumber) {
    console.log("You guessed lower than the number");
  } else {
    console.log("You guessed higher than the number");
  }
};
newPrompt();
