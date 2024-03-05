let nome: string = 'Juan';
nome = 'Hemerson';

// NUMBER
let numero: number = 23;

// STRING
const sobrenome: string = 'Vida loka'

const nomeCompleto  = fullName(nome, sobrenome);
console.log(nomeCompleto)
console.log(numero)

// Inference
let turma = 'FRONT-END'
console.log(typeof turma)

function fullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
}