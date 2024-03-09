const emailElement: HTMLInputElement = document.querySelector('#email')!
const passwordElement: HTMLInputElement = document.querySelector('#password')!
const errorsElement: HTMLDivElement = document.querySelector('#errors')!
const formElement: HTMLFormElement = document.querySelector('form')!

console.log('Hello')

function validate(e: SubmitEvent): void {
  e.preventDefault();

  if (emailElement.value.length > 50) {
    errorsElement.innerHTML = 'O campo de Email deve ter menos de 50 caracteres'
    return
  }
  if (passwordElement.value.length < 6 || passwordElement.value.length > 12) {
    console.log('oi')
    errorsElement.innerHTML = 'O campo de senha deve ter entre 6 e 12 caracteres'
    return
  }

  errorsElement.innerHTML = 'LOGADO'
}

formElement.addEventListener('submit', validate)
