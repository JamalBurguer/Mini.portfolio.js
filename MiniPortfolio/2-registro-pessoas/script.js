var registroDePessoas = [];

while (true) {
  var nome = prompt("Digite seu nome completo").trim().toUpperCase();
  if (nome.toLowerCase() == "sair") break;

  var idade = parseFloat(prompt("Digite sua idade"));
  if (isNaN(idade)) {
    alert("Idade Inválida");
    continue;
  }

  var faixa_etaria = "";
  if (idade < 18) {
    faixa_etaria = "Menor de idade";
  } else if (idade >= 18 && idade <= 59) {
    faixa_etaria = "Adulto(a)";
  } else {
    faixa_etaria = "Idoso(a)";
  }

  registroDePessoas.push({
    nome: nome,
    idade: idade,
    faixa_etaria: faixa_etaria
  });

  alert(`${nome} | ${idade} anos | Foi registrado com sucesso!`);
}

console.log("Pessoas Registradas");
registroDePessoas.forEach(r => {
  console.log(`Nome: ${r.nome} | Idade: ${r.idade} | Faixa Etária: ${r.faixa_etaria}`);
});