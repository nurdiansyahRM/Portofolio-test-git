const text = "Programmer";
const target = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 200);
  } else {
    //set waktu untuk mulai kembali
    setTimeout(() => {
      target.innerHTML = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}
target.innerHTML = " ";
typeEffect();

console.log("hallo dadan");
