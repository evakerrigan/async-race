import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import ControlGarage from '../components/ControlGarage/ControlGarage';
import Garage from '../components/Garage/Garage';
import Footer from '../components/Footer/Footer';
import { TypeHTMLElement } from '../types/types';

const appContainer: TypeHTMLElement | null = document.querySelector('.app');

export default class App {
  render() {
    if (appContainer !== null) {
      appContainer.appendChild(Header());
      appContainer.appendChild(Navigation());
      appContainer.appendChild(ControlGarage());
      appContainer.appendChild(Garage());
      appContainer.appendChild(Footer());
    }
  }
}
