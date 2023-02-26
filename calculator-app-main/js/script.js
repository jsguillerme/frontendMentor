let visorValor = document.getElementById("screen-value");
const botoes = document.querySelectorAll('.btnNumber');
const acoes = document.querySelectorAll('.btnActions');
const resultado = document.querySelector('.btnResultado');
const resetar = document.querySelector('.btnRes');

let firsTime = true;
let ultimosValores = []
let historico = [0]

resetar.addEventListener('click', () => {
  firsTime = true
  visorValor.innerText = 0;
  historico = [0];
  ultimosValores = [];

  console.clear()
})

resultado.addEventListener('click', () => {})

for (let x = 0; x < botoes.length; x++){
  botoes[x].addEventListener('click', function() {

    if(firsTime === true) {
      visorValor.innerText = ''
    }

    firsTime = false;
    visorValor.innerText += botoes[x].innerText
    ultimosValores.push(parseInt(visorValor.innerText))
  })
}

for (let x = 0; x < acoes.length; x++) {
  acoes[x].addEventListener('click', function() {

    ultimosValores.push(parseInt(visorValor.innerText))

    switch(acoes[x].innerText) {
      case '+':
        soma(parseInt(visorValor.innerText === '' ? historico[historico.length-1] : visorValor.innerText))
        break;
      case '-':
        subtrai(parseInt(visorValor.innerText === '' ? historico[historico.length-1] : visorValor.innerText))
        break;
      case 'x':
        multiplica(parseInt(visorValor.innerText === '' ? historico[historico.length-1] : visorValor.innerText))
        break;
      case '/':
        divide(parseInt(visorValor.innerText === '' ? historico[historico.length-1] : visorValor.innerText))
        break;
      case 'Del':
        apagaVisor()
        break;
      default:
        return;
    }
  })
}

function apagaVisor() {
  visorValor.innerText = 0
}

function salvaHistoricoValido(numero) {
}

function soma(valor){
  let firstValue = ultimosValores[ultimosValores.length - 1];
  visorValor.innerText = ''
}

function subtrai(valor) {
  let firstValue = ultimosValores[ultimosValores.length - 1];
  visorValor.innerText = ''
  let secondValue = ultimosValores[ultimosValores.length-1] - firstValue;
  console.log(secondValue)
}