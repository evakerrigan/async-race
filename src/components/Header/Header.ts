import './Header.scss';
import Foundation from '../../shared/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';

const Header = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'header',
    { className: 'header' },
    `
      THIS HEADER
    `
  );

  const render = () => {
    return container;
  };

  return render();
};

export default Header;
