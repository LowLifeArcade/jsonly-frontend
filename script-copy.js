const element = document.createElement('div');
const input = document.createElement('input');
const comment = document.createComment('a comment');
const thing = document.uri;
const divs = document.getElementsByClassName('test');
const datadiv = document.getElementById('data');
const ps = document.querySelectorAll('code');
let mynum = 2;
const myobj = { item1: 1 };
const button = document.createElement('button');
button.addEventListener('click', () => {
  mynum = 0
  
});

document.getElementById('demo').innerHTML = mynum;

input.classList = 'test test2 tes3';
input.dataset.test1 = 'data tester';
element.addEventListener('click', () => console.log('ya got me'));
element.style.background = 'salmon';
element.style.padding = '12';

button.innerText = 'click me';

ps[0].appendChild(button);

const app = document.getElementById('app');
app.appendChild(element);
console.log(app);
console.log(element);

element.appendChild(input);

console.log(datadiv.dataset);
console.log(input.dataset);
console.log(input.classList.entries());
console.log('code', ps);
console.log(divs);
console.log(comment);
console.log('myobj', myobj);
