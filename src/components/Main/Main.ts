import './Main.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import ControlGarage from '../ControlGarage/ControlGarage';
import Garage from '../Garage/Garage';
import Winners from '../Winners/Winners';
import pageStore from '../../store/pageStore';

const Main = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'main' },
    `
      THIS MAIN
    `
  );

  const render = () => {
    const { page } = pageStore.getState();
    console.log('начался рендер компоненты main, вот page = ', page);

    if (page === 'garage') {
      container.innerHTML = '';
      container.appendChild(ControlGarage());
      container.appendChild(Garage());
    } else if (page === 'winners') {
      container.innerHTML = '';
      container.appendChild(Winners());
    }

    return container;
  };

  pageStore.subscribe('component: Main', render);

  return render();
};

export default Main;
