num1 = prompt("Digite o primeiro número");
num2 = prompt("Digite o segundo número");

soma = Number(num1) + Number(num2);
multiplicacao = Number(num1) * Number(num2);
divisao = Number(num1) / Number(num2);
subtracao = Number(num1) - Number(num2);
resto = Number(num1) % Number(num2);

alert(`O resultado da soma é: ${soma}`);
alert(`O resultado da multiplicação é: ${multiplicacao}`);
alert(`O resultado da divisão é: ${divisao}`);
alert(`O resultado da subtração é: ${subtracao}`);
alert(`O resultado da resto é: ${resto}`);

function verificarParOuImpar(soma) {
  if (soma % 2 === 0) {
    return alert("Esse número é par");
  } else {
    return alert("Esse número é impar");
  }
}

function IguaisOuDiferentes(num1, num2) {
  if (num1 === num2) {
    return alert("Números são iguais");
  } else {
    return alert("Números são diferentes");
  }
}

verificarParOuImpar(soma);
IguaisOuDiferentes(num1, num2);
