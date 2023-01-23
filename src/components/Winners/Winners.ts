import './Winners.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';

const Winners = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'winners' },
    `<div class="table">
    <table class="table">
    <thead>
    <tr>
    <th class="win-number">№</th>
    <th class="win-car">Car</th>
    <th class="win-name">Name</th>
    <th class="win-winner">Wins</th>
    <th class="win-time">Best time (s)</th>
    </tr>
    </thead>
    <tbody></tbody>
    </table>
    </div>
    `
  );

  const render = () => {
    return container;
  };

  return render();
};

export default Winners;
