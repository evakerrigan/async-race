import { TypeCar } from '../types/types';

const GARAGE_INITIAL_PAGE_NUMBER = 1;
const GARAGE_LIMIT = 7;

type TypeGarageState = {
  page?: number;
  limit?: number;
  count?: number;
  cars?: TypeCar[];
};

type TypeStore<TState> = {
  state: TState;
  subscribers: Map<string, () => void>;
  setState: (props: TState) => void;
  getState: () => TState;
  subscribe: (key: string, render: () => void) => void;
};

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

    this.subscribers.forEach((render) => {
      console.log(render);

      render();
    });
  },

  getState() {
    return { ...this.state };
  },

  subscribe(key, render) {
    this.subscribers.set(key, render);
  },
};

declare global {
  interface Window {
    store: object;
  }
}

window.store = garageStore;

export default garageStore;
