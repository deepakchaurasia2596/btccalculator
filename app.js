let btn = document.querySelector(".investment__btn");
let inputPriceBought = document.querySelector(".price__input__bought");
let currentPriceBought = document.querySelector(".price__input__now");
let inputBtcBought = document.querySelector(".investment__btc");
let res = document.querySelector(".result");
function calculate() {
  if (
    inputPriceBought.value == "" ||
    currentPriceBought.value == "" ||
    inputBtcBought.value == ""
  ) {
    res.textContent = "please enter all the fields";
    res.style = "color:red";
  } else {
    let priceBought = inputPriceBought.value;
    // console.dir(priceBought);
    let currentPrice = currentPriceBought.value;
    // console.dir(currentPrice);
    let btcBought = inputBtcBought.value;
    console.log(btcBought);
    let costPrice = priceBought * btcBought;
    let todayPrice = currentPrice * btcBought;
    if (costPrice > todayPrice) {
      function loss() {
        let diff = costPrice - todayPrice;
        let lossPercentage = (diff / costPrice) * 100;
        res.style = "color:red";
        res.textContent = `your loss is ${lossPercentage}%`;
        // return `loss percentage is${lossPercentage}`;
      }
      loss();
    } else if (inputPriceBought.value === currentPriceBought.value) {
      res.textContent = "no profit no loss";
    } else {
      function profit() {
        let diff = todayPrice - costPrice;
        let profitPercentage = (diff / costPrice) * 100;
        res.style = "color:green";
        res.textContent = `you profit is ${profitPercentage}%`;
        // return `profit percentage is${profitPercentage}`;
      }
      profit();
    }
    // let finalResult = costPrice > todayPrice ? loss() : profit();
  }
}
btn.addEventListener("click", calculate);
