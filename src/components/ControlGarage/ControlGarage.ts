import './ControlGarage.scss';
import Foundation from '../../core/Foundation';
import { TypeHTMLElement } from '../../types/types';

const ControlGarage = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'control' },
    `<div class="control-wrapper">
      <input class="control-input" />
      <div class="control-color"></div>
      <button class="button">CREATE</button>
    </div>
    <div class="control-wrapper">
      <input class="control-input" />
      <div class="control-color"></div>
      <button class="button">UPDATE</button>
    </div>
    <div class="control-wrapper">
      <button class="button">RACE</button>
      <button class="button">RESET</button>
      <button class="button">GENERATE CARS</button>
    </div>`
  );

  const render = () => {
    return container;
  };

  return render();
};

export default ControlGarage;
