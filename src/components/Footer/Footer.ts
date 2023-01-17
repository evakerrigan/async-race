import './Footer.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';

const Footer = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'footer',
    { className: 'footer' },
    `
      THIS FOOTER
    `
  );

  const render = () => {
    return container;
  };

  return render();
};

export default Footer;
