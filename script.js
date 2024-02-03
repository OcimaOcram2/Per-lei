var nobtn = document.getElementById("no");
var sibtn = document.getElementById("si");
let arr = ["Ma come?", "Eddai!", "Ti pregooooo", "Uffa però", "Io si :c"];
padding1 =   20;
padding2= 50;

function maCome() {
    nobtn.innerHTML = arr[(Math.floor(Math.random() * arr.length))];
    sibtn.style.padding = padding1 + "px";
    padding1 = padding1 + 5;
    padding2 = padding2 + 5;
    console.log(test);
}