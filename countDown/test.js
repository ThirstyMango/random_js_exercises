const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const startCountDown = async function startCountDown(parent, timeInSeconds) {
  const startPar = document.createElement("p");
  startPar.textContent = `Countdown starting.`;
  parent.appendChild(startPar);

  while (timeInSeconds >= 0) {
    await wait(1000);
    const newPar = document.createElement("p");
    const textContent = timeInSeconds === 0 ? "BlastOff" : timeInSeconds;
    newPar.textContent = textContent;
    parent.appendChild(newPar);
    timeInSeconds--;
  }
};

startCountDown(output, 10);
