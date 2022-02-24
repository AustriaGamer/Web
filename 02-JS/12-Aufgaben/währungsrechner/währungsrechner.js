function calculate() {
  let startValue = document.getElementById("amount").value;
  let firstCurrency = document.getElementById("currency1").value;
  let secondCurrency = document.getElementById("currency2").value;
  let value1 = (startValue / rate(firstCurrency)) * rate(secondCurrency);
  document.getElementById("result").value = value1
}
function rate(currency) {
  let exchangeRate = {
    "EUR": 0.8631,
    "USD": 1,
    "GBP": 0.734124,
  };
  switch (currency) {
    case "EUR":
      return exchangeRate.EUR;
    case "USD":
      return exchangeRate.USD;
    case "GBP":
      return exchangeRate.GBP;
  }
}
