let nome: string = 'Juan';
nome = 'Hemerson';

// NUMBER
let numero: number = 23;

// STRING
const sobrenome: string = 'Vida loka'

const nomeCompleto = fullName(nome, sobrenome);
console.log(nomeCompleto)
console.log(numero)

// Inference
let turma = 'FRONT-END'
console.log(typeof turma)

function fullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
}


// ARRAYS

const myArray: number[] = [1, 2, 3, 4, 5, 2]
console.log(myArray[3])

const impares: Array<number> = [1, 3, 5, 7]
console.log(impares[2])

// USO DO ANY - EVITA PLMDS
let aluno: any = 'Aline'
aluno = 2
aluno = true

const myTrash: any[] = [1, 4.6, 'camisinha', false, [1, 2, 3]]

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

function imparNumbers(a: number[]): number {
  return a[5]
}

// OBJETOS

interface Coord {
  x: number, y: number
}

function Coordenadas(coord: Coord): void {
  console.log(coord.x)
  console.log(coord.y)
}

const objCoord: Coord = { x: 10, y: -5 }

Coordenadas(objCoord)

// ARGUMENTOS OPICIONAIS
function minhasIniciais(a: string, b: string, c?: string, d?: string) {
  console.log(`Minhas iniciais são: ${a} ${b} ${c} ${d}`)
}

minhasIniciais('J', 'U')

// UNION TYPES
let cpf: number | string
cpf = 12345678910
cpf = '123.456.789-10'

let userApi: string[] | number[] =  []
userApi = [12345, 123213]
userApi = ['Hemerson', 'Vida Loka']

// LITERALS TYPES
let teste: 'testando' = 'testando'
let n: 1 = 1
console.log(teste)

let x = 10
x = 0b1010;
console.log(nome)
