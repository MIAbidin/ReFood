import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';
import swRegister from './utils/sw-register';

import('../animasi/animations');

import('../animasi/animations');

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navbarSupportedContent'),
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
