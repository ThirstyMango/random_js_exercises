const generatePrimes = function generatePrimes(n) {
  n += 1;
  const nums = new Array(n).fill(true);
  const topMargin = Math.floor(Math.sqrt(nums.length));

  for (let i = 2; i < topMargin; i++) {
    for (let j = i * i; j < n; j += i) {
      nums[j] = false;
    }
  }

  const primeNums = [];
  for (let i = 1; i < n; i++) {
    if (nums[i]) primeNums.push(i);
  }

  return primeNums;
};

const showNums = async function showNums(container, nums) {
  container.textContent = "";
  for (const num of nums) {
    const par = document.createElement("li");
    par.classList.add("list__item");
    par.textContent = num;
    container.appendChild(par);
  }
};

const getUserInput = function getUserInput() {
  const userInputEl = document.querySelector("#userInputBtn");
  const userInput = +userInputEl.value;
  return userInput;
};

const startGenerator = function startGenerator() {
  const userInput = getUserInput();
  const primes = generatePrimes(userInput);
  const primesContainer = document.querySelector(".list");
  showNums(primesContainer, primes);
};

const userSubmitEl = document.querySelector("#userSubmitBtn");
userSubmitEl.addEventListener("click", startGenerator);
