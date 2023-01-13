import './Navigation.scss';
import Foundation from '../../core/Foundation';
import { TypeHTMLElement } from '../../types/types';

const Navigation = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'navigation' },
    `<div class="page">
      <button class="button">TO GARAGE</button>
      <button class="button">TO WINNERS</button>
    </div>`
  );

  const render = () => {
    return container;
  };
  return render();
};

export default Navigation;
