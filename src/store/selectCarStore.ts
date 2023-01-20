import { TypeCar, TypeCarStore } from '../types/types';

const selectCarStore: TypeCarStore<TypeCar> = {
  state: {
    id: 0,
    name: '',
    color: '',
  },

  setState(props) {
    this.state = {
      ...props,
    };
    // console.log('selectCarState = ', this.state);
  },

  getState() {
    // console.log('return selectCarState = ', { ...this.state });
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
