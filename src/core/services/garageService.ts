import garageStore from '../../store/garageStore';
import { getCars, setCar } from '../api/garageApi';

const garageService = {
  async viewCars(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
    });
  },
  async createCar(name: string, color: string): Promise<void> {
    setCar(name, color);
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
};

export default garageService;
function setCar(name: string, color: string) {
  throw new Error('Function not implemented.');
}

