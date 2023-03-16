// // const btnNumbers = [
// //   (tecla1 = document.querySelector("#tecla1")),
// //   (tecla2 = document.querySelector("#tecla2")),
// //   (tecla3 = document.querySelector("#tecla3")),
// //   (tecla4 = document.querySelector("#tecla4")),
// //   (tecla5 = document.querySelector("#tecla5")),
// //   (tecla6 = document.querySelector("#tecla6")),
// //   (tecla7 = document.querySelector("#tecla7")),
// //   (tecla8 = document.querySelector("#tecla8")),
// //   (tecla9 = document.querySelector("#tecla9")),
// //   (tecla0 = document.querySelector("#tecla0")),
// // ];

// const display = document.querySelector("#display");
// const btnClearDisplay = document.querySelector("#limparDisplay");
// const btnBackspace = document.querySelector("#backspace");
// const btnClear = document.querySelector("#limparCalculo");
// const btnDecimal = document.querySelector("#decimal");
// const btnIgual = document.querySelector("#igual");

// const btnOperators = [
//   (btnDividir = document.querySelector("#operadorDividir")),
//   (btnMultiplicar = document.querySelector("#operadorMultiplicar")),
//   (btnSubtrair = document.querySelector("#operadorSubtrair")),
//   (btnAdicionar = document.querySelector("#operadorAdicionar")),
//   (btnPorcento = document.querySelector("#operadorPorcento")),
// ];

// // console.log(btnOperators);

// // btnNumbers.addEventListener("click", () => {
// //   console.log("Funcionou");
// // });

// const btnNumbers = [
//   document.querySelector("#tecla1"),
//   document.querySelector("#tecla2"),
//   document.querySelector("#tecla3"),
//   document.querySelector("#tecla4"),
//   document.querySelector("#tecla5"),
//   document.querySelector("#tecla6"),
//   document.querySelector("#tecla7"),
//   document.querySelector("#tecla8"),
//   document.querySelector("#tecla9"),
//   document.querySelector("#tecla0"),
// ];

// btnNumbers.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     display.value += btn.value;
//     display.focus();
//     btn.value = "";
//     btn.focus();
//     // console.log(btn.value);
//     // console.log(display.value);
//     // console.log(display.value.length);

//   });
// });

const display = document.getElementById("display");
const limparDisplay = document.getElementById("limparDisplay");
const limparCalculo = document.getElementById("limparCalculo");
const backspace = document.getElementById("backspace");
const operadorDividir = document.getElementById("operadorDividir");
const operadorMultiplicar = document.getElementById("operadorMultiplicar");
const operadorSubtrair = document.getElementById("operadorSubtrair");
const operadorAdicionar = document.getElementById("operadorAdicionar");
const operadorPorcento = document.getElementById("operadorPorcento");
const tecla0 = document.getElementById("tecla0");
const tecla1 = document.getElementById("tecla1");
const tecla2 = document.getElementById("tecla2");
const tecla3 = document.getElementById("tecla3");
const tecla4 = document.getElementById("tecla4");
const tecla5 = document.getElementById("tecla5");
const tecla6 = document.getElementById("tecla6");
const tecla7 = document.getElementById("tecla7");
const tecla8 = document.getElementById("tecla8");
const tecla9 = document.getElementById("tecla9");
const decimal = document.getElementById("decimal");
const igual = document.getElementById("igual");

let valorAnterior = "";
let valorAtual = "";
let operadorAtual = null;
let limparValorAtual = false;

function limpar() {
  valorAnterior = "";
  valorAtual = "";
  operadorAtual = null;
  limparValorAtual = false;
  display.innerText = "0";
}

function limparAtual() {
  valorAtual = "";
  display.innerText = "0";
}

function back() {
  valorAtual = valorAtual.slice(0, -1);
  if (valorAtual === "") {
    display.innerText = "0";
  } else {
    display.innerText = valorAtual;
  }
}

function inserirNumero(numero) {
  if (limparValorAtual) {
    valorAtual = "";
    limparValorAtual = false;
  }
  valorAtual = valorAtual + numero;
  display.innerText = valorAtual;
}

function escolherOperador(operador) {
  if (operadorAtual !== null) {
    calcular();
  }
  valorAnterior = valorAtual;
  operadorAtual = operador;
  limparValorAtual = true;
}

function calcular() {
  if (operadorAtual === null || limparValorAtual) {
    return;
  }
  switch (operadorAtual) {
    case "+":
      valorAtual = `${parseFloat(valorAnterior) + parseFloat(valorAtual)}`;
      break;
    case "-":
      valorAtual = `${parseFloat(valorAnterior) - parseFloat(valorAtual)}`;
      break;
    case "*":
      valorAtual = `${parseFloat(valorAnterior) * parseFloat(valorAtual)}`;
      break;
    case "/":
      valorAtual = `${parseFloat(valorAnterior) / parseFloat(valorAtual)}`;
      break;
    case "%":
      valorAtual = `${parseFloat(valorAtual) / 100}`;
      break;
    default:
      return;
  }
  limparValorAtual = true;
  operadorAtual = null;
  display.innerText = valorAtual;
}

limpar();
limparCalculo.addEventListener("click", limpar);
limparDisplay.addEventListener("click", limparAtual);
backspace.addEventListener("click", back);
operadorDividir.addEventListener("click", () => escolherOperador("/"));
operadorMultiplicar.addEventListener("click", () => escolherOperador("*"));
operadorSubtrair.addEventListener("click", () => escolherOperador("-"));
operadorAdicionar.addEventListener("click", () => escolherOperador("+"));
