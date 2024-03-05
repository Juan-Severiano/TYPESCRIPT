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


// ARRAYS

const myArray: number[] = [1, 2, 3, 4, 5, 6]
console.log(myArray[3])

const impares: Array<number> = [1, 3, 5, 7]
console.log(impares[2])

// USO DO ANY - EVITA PLMDS
let aluno: any = 'Aline'
aluno = 2
aluno = true

const myTrash: any[] = [1, 4.6, 'casinha', false, [1, 2, 3]]

const arrArr: number[][] = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
]

console.log(arrArr[0][1])

// FUNCTIONS

function myFun(a: number, b: number): void {
  console.log(a + b);
}

myFun(3, 6)

function letters(a: string, b: string, c: string): void {
  console.log(`Letra: ${a}`)
  console.log(`Letra: ${b}`)
  console.log(`Letra: ${c}`)
}

// RETORNO DE UMA FUNÇÃO


