import './Navigation.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import Router from '../../routes/routes';
import pageStore from '../../store/pageStore';

const Navigation = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'navigation' },
    `<div class="page">
      <a href="/#/garage" class="button button-garage">TO GARAGE</a>
      <a href="/#/winners"class="button button-winners">TO WINNERS</a>
    </div>`
  );

  const router = new Router();

  console.log('роутер = ', router);

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLElement && target.classList.contains('button-garage')) {
      e.preventDefault();
      console.log('нажали кнопку BUTTON-GARAGE');
      const page = { page: 'garage' };
      console.log('page = ', page);
      pageStore.setState(page);
    }
  });
  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLElement && target.classList.contains('button-winners')) {
      e.preventDefault();
      console.log('нажали кнопку BUTTON-WINNERS');
      const page = { page: 'winners' };
      console.log('page = ', page);
      pageStore.setState(page);
    }
  });

  const render = () => {
    return container;
  };
  return render();
};

export default Navigation;
