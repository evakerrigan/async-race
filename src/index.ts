import './assets/styles/normalize.scss';
import './assets/styles/reset.scss';
import './assets/styles/global.scss';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const app: HTMLBodyElement | null = document.querySelector('.app');

function render() {
  if (app !== null) {
    app.appendChild(Header());
    app.appendChild(Navigation());
  }

  // Header.render();
  // Navigation.render();
}

render();
