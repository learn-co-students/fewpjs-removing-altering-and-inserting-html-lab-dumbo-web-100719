// Write your code here!
let element = document.querySelector("main#main");
element.remove('main');

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = `${name} is the champion`