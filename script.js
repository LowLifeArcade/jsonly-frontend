const app = document.getElementById('app');
const main = document.createElement('main');
const plusButton = document.createElement('button');
const minusButton = document.createElement('button');
const buttons = document.createElement('div')
const display = document.createElement('div')

plusButton.innerHTML = '+'
minusButton.innerHTML = '-'

app.style.display = 'flex';
app.style.justifyContent = 'center';
app.append(main);

main.style.background = 'salmon';
main.style.borderRadius = '5px'
main.style.height = 500;
main.style.width = 500;
main.style.display = 'flex'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'
main.style.flexDirection = 'column'
main.append(display)
main.append(buttons)

display.style.background = 'white'
display.style.borderRadius = '5px'
display.style.width = 50
display.style.padding = 10
display.style.marginBottom = 10
display.style.display = 'flex'
display.style.justifyContent = 'center'
display.innerHTML = 'hi'

buttons.append(plusButton, minusButton)

plusButton.addEventListener('click', (e) => {
  e.preventDefault()
  display.innerHTML = ''
  display.innerHTML = 'added'
})
minusButton.addEventListener('click', (e) => {
  e.preventDefault()
  display.innerHTML = ''
  display.innerHTML = 'minus'
})
