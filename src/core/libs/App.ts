import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Main from '../../components/Main/Main';
// import ControlGarage from '../../components/ControlGarage/ControlGarage';
// import Garage from '../../components/Garage/Garage';
import Footer from '../../components/Footer/Footer';

// const appContainer: TypeHTMLElement | null = document.querySelector('.app');

export default class App {
  protected rootElement: HTMLElement | null;

  constructor() {
    this.rootElement = document.querySelector('.app');

    if (this.rootElement instanceof HTMLDivElement === false) {
      const rootElement = document.createElement('div');

      rootElement.id = 'app';

      rootElement.className = 'app';

      document.body.appendChild(rootElement);

      this.rootElement = rootElement;
    }
  }

  render() {
    if (this.rootElement !== null) {
      this.rootElement.appendChild(Header());
      this.rootElement.appendChild(Navigation());
      this.rootElement.appendChild(Main());
      // this.rootElement.appendChild(ControlGarage());
      // this.rootElement.appendChild(Garage());
      this.rootElement.appendChild(Footer());
    }
  }
}
