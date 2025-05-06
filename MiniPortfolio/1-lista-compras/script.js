let produtos = [];

while (true) {
  let nome = prompt("Digite o nome do produto (ou 'sair' para encerrar):");
  if (nome.toLowerCase() === "sair") break;

  let categoria = prompt("Categoria (eletrônico, alimento ou vestuário):").trim().toLowerCase();  
  let valor = parseFloat(prompt("Valor do produto:"));  

  if (isNaN(valor)) {  
    alert("Valor inválido!");  
    continue;  
  }  

  let desconto;

  switch (categoria) {  
    case "eletrônico":
    case "eletronico":
      desconto = 0.10;  
      break;
    case "alimento":
      desconto = 0.05;  
      break;
    case "vestuário":
    case "vestuario":
      desconto = 0.15;  
      break;
    default:
      alert("Categoria inválida!");
      continue;
  }

  let valorComDesconto = valor - (valor * desconto);  

  produtos.push({  
    nome: nome,  
    categoria: categoria,  
    valorFinal: valorComDesconto.toFixed(2)
  });  

  alert(`${nome} registrado com desconto! Valor final: R$ ${valorComDesconto.toFixed(2)}`);
}

console.log("Resumo dos produtos:");
produtos.forEach(p => {
  console.log(`Produto: ${p.nome} | Categoria: ${p.categoria} | Valor com desconto: R$ ${p.valorFinal}`);
});