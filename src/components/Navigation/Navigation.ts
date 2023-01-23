import './Navigation.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import Router from '../../routes/routes';

const Navigation = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'navigation' },
    `<div class="page">
      <a href="/#/garage" class="button">TO GARAGE</a>
      <a href="/#/winners"class="button">TO WINNERS</a>
    </div>`
  );

  const router = new Router();

  // const router = new Router({
  //   routes: [/garage/, /winners/],
  //   mode: 'hash',
  //   root: '/',
  // });
  console.log('роутер = ', router);

  const render = () => {
    return container;
  };
  return render();
};

export default Navigation;
