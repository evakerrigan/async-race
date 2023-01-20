import { TypeGarageState, TypeStore } from '../types/types';

const GARAGE_INITIAL_PAGE_NUMBER = 1;
const GARAGE_LIMIT = 7;

const garageStore: TypeStore<TypeGarageState> = {
  state: {
    page: GARAGE_INITIAL_PAGE_NUMBER,
    limit: GARAGE_LIMIT,
    count: 0,
    cars: [],
  },

  subscribers: new Map(),

  setState(props) {
    this.state = {
      ...this.state,
      ...props,
    };
    console.log('garageStore = ', this.state);

    this.subscribers.forEach((render) => {
      // console.log(render);

      render();
    });
  },

  getState() {
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

window.store = garageStore;

export default garageStore;
