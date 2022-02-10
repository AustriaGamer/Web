let banana = "Banane";
let apple = "Apple";
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let normalBananaWeight = 0.22;
let normalAppleWeight = 0.34;

document.write(
  "Pro Kilo erhält man " +
    1 / normalBananaWeight +
    " Bananen oder " +
    1 / normalAppleWeight +
    " Äpfel" +
    "<br>"
);
function givePrice(fruit, number, weight) {
  let price;
  let nOrW;
  switch (fruit) {
    case apple:
      switch (number) {
        case "?":
          nOrW = weight + " kg";
          price = Math.round(applePricePerKilo * weight*100)/100;
          break;
        default:
          nOrW = number;
          price = Math.round(applePricePerKilo * normalAppleWeight * number*100)/100;
      }
      document.write(
        "Preis von " + nOrW + " Äpfel ist: " + price + "€." + "<br>"
      );
      break;
    case banana:
      switch (number) {
        case "?":
          nOrW = weight + " kg";
          price = Math.round(bananaPricePerKilo * weight*100)/100;
          break;
        default:
          nOrW = number;
          price = Math.round(bananaPricePerKilo * normalBananaWeight * number*100)/100;
      }
      document.write(
        "Preis von " + nOrW + " Bananen ist: " + price + "€." + "<br>"
      );
      break;
  }
}
givePrice(apple, 8);
givePrice(banana, 17);
givePrice(apple, "?", 1000);
givePrice(banana, "?", 1000);
