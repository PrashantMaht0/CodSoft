document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.innerText;
      handleButtonClick(buttonText);
    });
  });

  function handleButtonClick(buttonText) {
    if (buttonText === "AC") {
      display.value = "";
    } else if (buttonText === "C") {
      display.value = display.value.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        display.value = eval(
          display.value.replace(/x/g, "*").replace(/÷/g, "/")
        );
      } catch {
        display.value = "Error";
      }
    } else if (buttonText === "Sqrt") {
      display.value = Math.sqrt(parseFloat(display.value));
    } else if (buttonText === "Sq") {
      display.value = Math.pow(parseFloat(display.value), 2);
    } else if (buttonText === "%") {
      display.value = parseFloat(display.value) / 100;
    } else if (buttonText === "1/x") {
      display.value = 1 / parseFloat(display.value) ;
    } else {
      display.value += buttonText;
    }
  }
});
