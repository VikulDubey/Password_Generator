const submitBtn = document.querySelector(".submitBtn");
const userInput = document.querySelector("#userInput");
const copyBtn = document.querySelector("#copyBtn");

function generateRandomPassword(passwordLength) {
  const allWords =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*";
  let getRandomPassword = "";
  for (let i = 1; i <= passwordLength; i++) {
    let getRandomWord = allWords[Math.floor(Math.random() * allWords.length)];
    getRandomPassword += getRandomWord;
  }
  return getRandomPassword;
}

submitBtn.addEventListener("click", () => {
  console.log(userInput.value);
  let getLength = parseInt(userInput.value);
  console.log(getLength);
  if (
    getLength <= 0 ||
    userInput.value === "" ||
    userInput.value === undefined ||
    userInput.value === "null"
  ) {
    alert("Please enter valid digit");
    userInput.value = "";
  } else {
    const getFinalPassword = generateRandomPassword(getLength);
    userInput.value = getFinalPassword.toString();
  }
});

copyBtn.addEventListener("click", async () => {
  try {
    if (userInput.value != "") {
      await navigator.clipboard.writeText(userInput.value);
      alert("Password saved on clipboard" + " " + userInput.value);
      console.log("clipboard saved");
      userInput.value = "";
    } else {
      throw new Error("Nothing in the password field");
    }
  } catch (e) {
    alert(e.message);
  }
});
