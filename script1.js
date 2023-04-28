const input = document.getElementById("calc");
const buttons = document.querySelectorAll("button");

let string = "";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      input.value = eval(string);
      string = input.value;
    }
    if (e.key === "Backspace") {
      string = string.slice(0, -1);
      input.value = string;
    }
    if (e.key === "Escape") {
      string = "";
      input.value = "";
    }
    if (e.key === "0") {
      string += "0";
      input.value = string;
    }
    if (e.key === "1") {
      string += "1";
      input.value = string;
    }
    if (e.key === "2") {
      string += "2";
      input.value = string;
    }
    if (e.key === "3") {
      string += "3";
      input.value = string;
    }
    if (e.key === "4") {
      string += "4";
      input.value = string;
    }
    if (e.key === "5") {
      string += "5";
      input.value = string;
    }
    if (e.key === "6") {
      string += "6";
      input.value = string;
    }
    if (e.key === "7") {
      string += "7";
      input.value = string;
    }
    if (e.key === "8") {
      string += "8";
      input.value = string;
    }
    if (e.key === "9") {
      string += "9";
      input.value = string;
    }
    if (e.key === "+") {
      string += "+";
      input.value = string;
    }
    if (e.key === "-") {
      string += "-";
      input.value = string;
    }
    if (e.key === "*") {
      string += "*";
      input.value = string;
    }
    if (e.key === "/") {
      string += "/";
      input.value = string;
    }
    if (e.key === ".") {
      string += ".";
      input.value = string;
    }
  });
  document.querySelector(".calculator").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const buttonValue = e.target.innerHTML;
      switch (buttonValue) {
        case "=":
          input.value = eval(string);
          string = input.value;
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
