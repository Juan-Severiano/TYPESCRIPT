// TYPE ALIAS
type tipoAluno = string | undefined

let nomeAluno: tipoAluno
let sobrenomeAluno: tipoAluno
let endereco: tipoAluno
let nomeDoPai: tipoAluno
let nomeDaMae: tipoAluno

function showAluno(dado: tipoAluno): void {
  console.log('Hello world', dado);
}

showAluno(nomeAluno)

type ID = number | string

type Sexos = 'Masc' | 'Fem' | 'Macaco' | 'Outros' | 'Fiat Uno 94'

let a: Sexos = 'Fiat Uno 94'

function showId(id: ID): void {
  console.log(id)
}

showId('nomeAluno')

// INTERFACE

interface Points {
  x: number
  y: number
  z: number
}

const itemCoord = {
  x: 10, y: 15, z: 12
}

function showCoords(obj: Points): void {
  console.log(`
    As coordenadas x: ${obj.x}, y: ${obj.y} e z: ${obj.z}
  `)
}

showCoords(itemCoord)
