
let nome  = "Pedro";
let idade = 17;
let sexo  = "Masculino";
let nota1 = Number(prompt("Qual a primeira nota?"));
let nota2 = Number(prompt("Qual a segunda nota?"));


let media = (nota1 + nota2) / 2;


let maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade";


let situacao = media >= 7 ? "Aprovado" : "Reprovado";


console.log("=== CADASTRO ===");
console.log("Nome: "       + nome);
console.log("Idade: "      + idade + " → " + maioridade);
console.log("Sexo: "       + sexo);
console.log("Média: "      + media + " → " + situacao);