import './styles/common';

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello, Webpack!';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
