let number;
let number2;
number = Math.round(Math.random()*100);
number2 = Math.round(Math.random()*100);
if(number < 30 || number2 < 30){
    document.write("Eine der beiden Zahlen ist kleiner als 30.<br></br>")
}
if(number < number2 && number2 <50){
    document.write("Zahl1: "+number+" ist kleiner als Zahl2: "+ number2+" und mini.")
}
if(number < 50 && number2!= 50){
    document.write("Erste Zahl klein und zweite kein 50er.")
}
document.write("<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>");
document.write("Zahl 1: "+number);
document.write("<br></br>Zahl 2: "+number2);