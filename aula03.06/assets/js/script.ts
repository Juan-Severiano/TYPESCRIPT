const inputElement: HTMLInputElement = document.querySelector('#input')!;
const fromElement: HTMLSelectElement = document.querySelector('#from')!;
const toElement: HTMLSelectElement = document.querySelector('#to')!;
const outputElement: HTMLInputElement = document.querySelector('#output')!;
const converterElement: HTMLButtonElement = document.querySelector('#converter-btn')!;
const messageElement: HTMLDivElement = document.querySelector('#message')!

function converter(): void {
  const fromValue: string = fromElement.value
  const toValue: string = toElement.value

  if (fromValue === toValue) {
    outputElement.value = inputElement.value
    messageElement.textContent = ''
    return
  }

  let metros: number = 0;
  const inputElementValueNumber: number = Number(inputElement.value)
  switch (fromValue) {
    case 'm':
      metros = inputElementValueNumber
      break;
    case 'km':
      metros = inputElementValueNumber * 1000
      break;
    case 'cm':
      metros = inputElementValueNumber / 100
      break;
    case 'mm':
      metros = inputElementValueNumber / 1000
      break;
  }

  let result: number = 0
  switch (toValue) {
    case 'm':
      result = metros
      break;
    case 'km':
      result = metros / 1000
      break;
    case 'cm':
      result = metros * 100
      break;
    case 'mm':
      result = metros * 1000
      break
  }

  outputElement.value = result.toFixed(2)

  const fromLabel: string = fromElement.options[fromElement.selectedIndex].text
  const toLabel: string = toElement.options[toElement.selectedIndex].text
  const message: string = `${inputElement.value} ${fromLabel} equivale a ${result.toFixed(2)} ${toLabel}`
  // const message: string = `FALA AI`

  messageElement.innerText = message
}

converterElement.addEventListener('click', converter)
