function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarSucesso(media) {
  return media >= 7;
}

const estudantes = [
  { nome: "João", nota1: 8, nota2: 7 },
  { nome: "Maria", nota1: 4, nota2: 8 },
  { nome: "Pedro", nota1: 7, nota2: 7 },
];

for (const estudante of estudantes) {
  const media = calcularMedia(estudante.nota1, estudante.nota2);

  if (verificarSucesso(media)) {
    alert(`${estudante.nome} passou no concurso!!! Com média ${media}`);
  } else {
    alert(`${estudante.nome} não passou no concurso!!! Com média ${media}`);
  }
}
