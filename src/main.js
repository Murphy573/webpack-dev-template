import './styles/common';
import './assets/iconfont/iconfont';
import LYF from './assets/lyf.jpg';
import './scripts/promise/test';

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello, Webpack!';
  element.classList.add('hello');

  let elmI = document.createElement('i');
  elmI.classList.add('iconfont', 'icon-tuangouguanli');
  document.body.appendChild(elmI);

  let lyf = new Image();
  lyf.src = LYF;

  element.appendChild(lyf);

  return element;
}

// document.body.appendChild(component());
