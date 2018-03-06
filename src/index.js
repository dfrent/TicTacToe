import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

window.addEventListener('mousedown', function(e) {
  document.body.classList.add('mouse-navigation');
  document.body.classList.remove('kbd-navigation');
});
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('kbd-navigation');
    document.body.classList.remove('mouse-navigation');
  }
});
window.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});

window.onerror = function(message, source, line, col, error) {
  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
    ReactDOM.render(document.getElementById('errors').textContent += text + '\n', document.getElementById('errors'));
};
console.error = (function(old) {
  return function error() {
    ReactDOM.render(document.getElementById('errors').textContent += Array.prototype.slice.call(arguments).join(' ') + '\n', document.getElementById('errors'));
    old.apply(this, arguments);
  }
})(console.error);


ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();