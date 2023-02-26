let previousValue = document.getElementById('previousValue');
let currentValue = document.getElementById('currentValue');
let operation = document.getElementById('operation');
const numeros = document.querySelectorAll('.btnNumber');
const resultado = document.querySelector('.btnResultado');
const operacoes = document.querySelectorAll('.btnActions');

let firsTime = true;

resultado.addEventListener('click', () => {
  result(
    previousValue.innerText,
    currentValue.innerText,
    operation.innerText
  )
})

for (let x = 0; x < numeros.length; x++) {
  numeros[x].addEventListener('click', function () {
    if (firsTime === true) {
      currentValue.innerText = ''
    }
    firsTime = false;
    currentValue.innerText += numeros[x].innerText;
  })
}

for (let x = 0; x < operacoes.length; x++) {
  operacoes[x].addEventListener('click', function() {
    switch(operacoes[x].innerText) {
      case '+':
        soma(previousValue.innerText, currentValue.innerText);
        operation.innerText = "+"
        currentValue.innerText = 0;
        firsTime = true;
        break;
      case '-':
        if(previousValue.innerText == 0) {
          return;
        } else {
          subtrai(previousValue.innerText, currentValue.innerText);
          operation.innerText = "-"
          firsTime = true;
          break;
        }
      case 'x':
        multi(previousValue.innerText, currentValue.innerText);
        operation.innerText = "*"
        firsTime = true;
        break;
      case '/':
        div(previousValue.innerText, currentValue.innerText);
        operation.innerText = "/"
        firsTime = true;
        break;
      case 'Del':
        currentValue.innerText = '0'
        firsTime = true;
        break;
      default:
        return;
    }
  })
}

function result(pre, curr, ope) {
  console.log('aq')
  switch(ope) {
    case '+':
      currentValue.innerText = (+pre) + (+curr)
      firsTime = true
      previousValue.innerText = ''
      operation.innerText = ''
      break;
    case '-':
      currentValue.innerText = (+pre) - (+curr)
      firsTime = true
      previousValue.innerText = ''
      operation.innerText = ''
      break;
    case '*':
      currentValue.innerText = (+pre) * (+curr)
      firsTime = true
      previousValue.innerText = ''
      operation.innerText = ''
      break;
    case '/':
      currentValue.innerText = (+pre) / (+curr)
      firsTime = true
      previousValue.innerText = ''
      operation.innerText = ''
      break;
    case 'Del':
      apagaVisor()
      break;
    default:
      return;
  }
}

function soma(prev, curr) {
  let somaTotal = (+prev) + (+curr);
  previousValue.innerText = somaTotal;

  console.log(somaTotal)
}

function subtrai(prev, curr) {
  let subTotal = (+prev) - (+curr);
  previousValue.innerText = subTotal;
  
  console.log(subTotal)
}

function multi(prev, curr) {
  let multiTotal = (+prev) * (+curr);
  previousValue.innerText = multiTotal;
  
  console.log(multiTotal)
}

function div(prev, curr) {
  if((prev == 0 && curr == 0) || undefined || null) {
    return;
  }
  let divTotal = (+prev) / (+curr);
  previousValue.innerText = divTotal;
  
  console.log(divTotal)
}