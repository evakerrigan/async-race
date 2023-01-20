import garageStore from '../../store/garageStore';
import selectCarStore from '../../store/selectCarStore';
// import { TypeCar } from '../../types/types';
import { getCars, removeCarServer, setCar, updateCarServer } from '../api/garageApi';

const garageService = {
  async setCars(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
    });
  },
  async createCar(name: string, color: string): Promise<void> {
    setCar(name, color).then((car) => {
      if (car) {
        getCars(1, 7).then((data) => {
          if (data) {
            // console.log('data create = ', data);
            garageStore.setState(data);
          }
        });
        // console.log('машинка записана на сервер', car);
        // console.log('store cars сейчас машинок в сторе =>', garageStore.getState().cars);
        // const cars: TypeCar[] | undefined = garageStore?.getState()?.cars;
        // const newCars = cars ? [...cars, car] : [car];
        // garageStore.setState({ cars: newCars });
        // console.log('а теперь уже машинок в сторе =>', garageStore.getState().cars);
      }
    });
  },
  async updateCar(id: number, name: string, color: string): Promise<void> {
    updateCarServer(id, name, color).then(() => {
      getCars(1, 7).then((data) => {
        if (data) {
          garageStore.setState(data);
        }
      });
    });
  },
  async raceCar(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
    });
  },
  async resetCar(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
    });
  },
  async generateCar(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
    });
  },
  async removeCar(id: number): Promise<void> {
    removeCarServer(id).then(() => {
      getCars(1, 7).then((data) => {
        if (data) {
          garageStore.setState(data);
        }
      });
    });
  },
  async selectCar(id: number, name: string, color: string): Promise<void> {
    selectCarStore.setState({ id, name, color });
  },
  // async getUpdateSelectCar(): Promise<{ id: number; name: string; color: string }> {
  //   console.log('selectCarStore.getState() = ', selectCarStore.getState());
  //   return selectCarStore.getState();
  // },
  getUpdateSelectCar() {
    return selectCarStore.getState();
  },
  async getCountCar(): Promise<void> {
    garageStore.getState();
    console.log('store cars сейчас машинок в сторе =>', garageStore.getState().count);
  },
  resetSelectCar() {
    return selectCarStore.setState({ id: -1, name: '', color: '' });
  },
};

export default garageService;
