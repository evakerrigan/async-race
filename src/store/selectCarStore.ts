import { TypeCar, TypeStore } from '../types/types';

const selectCarStore: TypeStore<TypeCar> = {
  state: {
    id: 0,
    name: '',
    color: '',
  },

  subscribers: new Map(),

  setState(props) {
    this.state = {
      ...props,
    };
    console.log('selectCarState = ', this.state);
  },

  getState() {
    return { ...this.state };
  },
};

declare global {
  interface Window {
    store: object;
  }
}

window.store = selectCarStore;

export default selectCarStore;
