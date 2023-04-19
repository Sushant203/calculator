const input = document.getElementById("calc");
const buttons = document.querySelectorAll("button");

let string = "";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".calculator").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const buttonValue = e.target.innerHTML;
      switch (buttonValue) {
        case "=":
          input.value = eval(string);
          break;
        case "Ac":
          string = "";
          input.value = "";
          break;
        case "Del":
          string = string.slice(0, -1);
          input.value = string;
          break;
        default:
          string += buttonValue;
          input.value = string;
          console.log(input.value);
      }
    }
  });
});
