import { TypePage, TypeStore } from '../types/types';

const pageStore: TypeStore<TypePage> = {
  state: {
    page: 'garage',
  },

  subscribers: new Map(),

  setState(props) {
    this.state = {
      ...props,
    };
    console.log('set pageState = ', this.state);
    this.subscribers.forEach((render) => {
      // console.log(render);

      render();
    });
  },

  getState() {
    // console.log('return selectCarState = ', { ...this.state });
    console.log('get pageState = ', this.state);
    return { ...this.state };
  },

  subscribe(key, render) {
    this.subscribers.set(key, render);
    console.log('subscribe-key = ', key);
  },
};

declare global {
  interface Window {
    store: object;
  }
}

window.store = pageStore;

export default pageStore;
