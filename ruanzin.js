cicios · JS
// Exercício 1
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
console.log(nomes[0]);
 
 
// Exercício 2
const cores = ["vermelho", "azul", "verde", "amarelo"];
console.log(cores[cores.length - 1]);
 
 
// Exercício 3
const frutas = ["maçã", "banana", "uva", "manga"];
frutas.push("laranja");
console.log(frutas.length);
 
 
// Exercício 4
const numeros = [10, 20, 30, 40, 50];
 
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
 

 
// Exercício 5
const pessoa = {
  nome: "Ruan",
  idade: 20,
  cidade: "Recife"
};
 
console.log(pessoa.nome);
 
 
// Exercício 6
pessoa.idade = 21;
console.log(pessoa);
 
 
// Exercício 7
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);
 
 
// Exercício 8
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "prata"
};
 
console.log(carro);
 
 
// Exercício 9
 
const alunos = [
  { nome: "Lucas",   nota: 8.5 },
  { nome: "Mariana", nota: 9.0 },
  { nome: "Pedro",   nota: 7.5 }
];
 
console.log(alunos[0].nota);
 
 
// Exercício 10
 
alunos.push({ nome: "Juliana", nota: 10.0 });
console.log(alunos);
 
 
// Exercício 11
 
for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome);
}