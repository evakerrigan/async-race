import './Garage.scss';
import Foundation from '../../core/Foundation';
import { TypeHTMLElement } from '../../types/types';

const Garage = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'garage' },
    `<h2 class="page-title">Garage</h2>

      <div class="page-pagination">Page #1</div>

      <ul class="auto-list">
        <li class="auto-item">
          <div class="auto-wrapper">
            <button class="button">SELECT</button>
            <button class="button">REMOVE</button>
            <div class="auto-title">Tesla</div>
          </div>
          <div class="auto-sprint">
            <div class="auto-control">
              <button class="button start">A</button>
              <button class="button stop">B</button>
            </div>
            <div class="auto" style="background-color: pink;"></div>
          </div>
        </li>
        <li class="auto-item">
          <div class="auto-wrapper">
            <button class="button">SELECT</button>
            <button class="button">REMOVE</button>
            <div class="auto-title">Audi</div>
          </div>
          <div class="auto-sprint">
            <div class="auto-control">
              <button class="button start">A</button>
              <button class="button stop">B</button>
            </div>
            <div class="auto" style="background-color: green;"></div>
          </div>
        </li>
      </ul>
      <div class="pagination-wrapper">
        <button class="button">PREV</button>
        <button class="button">NEXT</button>
      </div>`
  );

  const render = () => {
    return container;
  };

  return render();
};

export default Garage;
