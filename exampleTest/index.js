let config = {
  height: document.getElementById("height").value,
  weight: document.getElementById("weight").value,
  calculate: document.getElementById("calculate"),
  answer: document.getElementById("answer"),
};
config.calculate.onclick = function () {
  printAnswer(calculateAnswer());
};

function calculateAnswer() {
  config.height = document.getElementById("height").value;
  config.weight = document.getElementById("weight").value;
  return Math.round((config.height * 1.43) / config.weight - 3.4);
}
function printAnswer(answer) {
  console.log(answer);
  let p = config.answer.innerText;
  var text = "";
  let numbertext = "";

  if ((answer == 0)) {
    text = "Null";
  } else if (answer < 0) {
    text = "Negativ   ";
    for (let i = 0; i >= answer; i--) {
      if (i == 0) {
        numbertext = "0";
      } else {
        numbertext = numbertext + ", -" + i;
      }
      console.log(numbertext +"kd")
    }
  } else if (answer > 0) {
    text = "Positiv";
    for (let i = 0; i <= answer; i++) {
      if (i == 0) {
        numbertext = "0";
      } else {
        numbertext = numbertext + ", " + i;
      }
    }
  }else{
    text = "Error"
  }
  document.getElementById("answer").innerHTML = text + numbertext;
}
