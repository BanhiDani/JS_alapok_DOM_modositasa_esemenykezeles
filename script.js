window.addEventListener("load", function () {
    const lista = [];
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
});

function elemekElerese1() {
  let elem = document.querySelector("section h2");
  console.log(elem.innerHTML);
}
function elemekElerese2() {
  let elem = document.getElementById("ide");
  elem.innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
  const elem = document.getElementsByClassName("ide");
  elem[0].innerHTML = "<p>Jó reggelt!</p>";
  console.log(elem);
}

function elemekElerese4() {
  let elem = document.getElementsByClassName("lista");
 
  elem[0].innerHTML = "<ul>";
  
  for (let index = 0; index < 5; index++) {
    let rndSzam = Math.random() * 21 + 10;
    rndSzam = Math.floor(rndSzam);
    console.log(rndSzam);
    elem[0].innerHTML += `<li>${rndSzam}</li>`;
    
  }
  elem[0].innerHTML += "<ul>";
}

function elemekFormazasa1() {
  let elem = document.getElementsByClassName("lista");
  elem[0].classList.add("formazott");
  elem[0].addEventListener("click", elemekFormazasa2);
}

function elemekFormazasa2() {
  let elem = document.getElementsByClassName("kattintasutan")
  let elem2 = document.getElementsByClassName("lista")
    elem[0].innerHTML = elem2[0].innerHTML;
}
