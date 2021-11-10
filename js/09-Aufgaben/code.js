for (let index = 0; index < 4; index++) {
  for (let i = 0; i < 4; i++) {
    if (index % 2 == 0) {
      document.write("X");
    } else {
      document.write("O");
    }
  }
  document.write("<br></br>")
}
let allnumbers=0;
for (let index = 0; index <=100; index++) {
  if(index%2==0){
    allnumbers +=index;
  }
}
document.write(allnumbers);
document.write("<br></br>")
let allnumbers2 =0;
for (let index = 0; index <=100; index+=2) {
    allnumbers2 +=index;
}
document.write(allnumbers2);