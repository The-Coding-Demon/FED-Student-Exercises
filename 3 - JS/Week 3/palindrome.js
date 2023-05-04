const palindrome = document.querySelector("#palindrome");
const userinput = document.querySelector("#backwardword");

const submitevent = (event) => {
  event.preventDefault();
  const finaluserinput = userinput.value.toLowerCase();
  // console.log(finaluserinput);
  const inputsplit = finaluserinput.split("");
  // console.log(inputsplit);
  const inputreverse = inputsplit.reverse("");
  // console.log(inputreverse);
  const inputjoin = inputreverse.join("");
  // console.log(inputjoin);
  if (finaluserinput == inputjoin) {
    console.log("true");
  } else {
    console.log("false");
  }
};

palindrome.addEventListener("submit", submitevent);
