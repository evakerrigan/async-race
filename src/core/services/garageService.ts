import garageStore from '../../store/garageStore';
import { TypeCar } from '../../types/types';
import { getCars, removeCarServer, setCar } from '../api/garageApi';

const garageService = {
  async setCars(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        // console.log('state из setCars = ', data);
        garageStore.setState(data);
      }
    });
  },
  async createCar(name: string, color: string): Promise<void> {
    setCar(name, color).then((car) => {
      if (car) {
        getCars(1, 7).then((data) => {
          if (data) {
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
  async updateCar(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
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
};

export default garageService;
