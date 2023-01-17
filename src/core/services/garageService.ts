import garageStore from '../../store/garageStore';
import { getCars } from '../api/apiGarage';

const garageService = {
  async setCars(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garageStore.setState(data);
      }
    });
  },
};

export default garageService;
