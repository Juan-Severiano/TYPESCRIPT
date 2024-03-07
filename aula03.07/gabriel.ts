// tipo Unknown

function anything(x: unknown): void {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === 'number') {
    console.log(x + 1)
  } else if (true) {}
}

anything([1, 3, 4, 5, 6, 7, 8, 9])

// tipo Never

function showError(msg: string): never {
  throw new Error('Errooooouuuuaaaaaaaaaaa')
}

// Spread operator

let arrNum = [1, 2, 3, 4, 5]
let newArrNum = [...arrNum, 6, 7, 8, 9, 10]

console.log(newArrNum)

// Rest operator
function funcRest(...a: number[]) {
  console.log(a);
}

funcRest(2, 3, 5, 3)

// destructuring
function showProducts({ name, price }: { name: string, price: number }): string {
  return `O nome do produto é ${name} e o preço é ${price}`;
}

console.log(showProducts({
  name: 'Gabriel Putinha',
  price: 23
}))

// MATRIX
const arrArrNumber: number[][] = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

// Readonly
const q: number[] = [1]
console.log(q)
console.log(q)
console.log(q)

interface Carro {
  readonly brand: string
  readonly qtdePneus: number
}

const fusca: Carro = {
  brand: 'VW',
  qtdePneus: 4
}

fusca.qtdePneus

// Optional na interface

interface User {
  email: string
  regra?: string
}

function showUserDetails(user: User): string {
  // return `Seu email é ${user.email} e sua dyãgu jyãgu hiaquity agateMely`
  return `Çeu emeiu eh ${user.email} i çua hega de açeçu eh ${ user.regra ? user.regra : 'Sem acesso' }`
}
