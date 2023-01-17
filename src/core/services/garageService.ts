import garage from '../../store/garage';
import { getCars } from '../api/apiGarage';

const garageService = {
  async setCars(page: number): Promise<void> {
    getCars(page, 7).then((data) => {
      if (data) {
        garage.setState(data);
      }
    });
  },
};

export default garageService;
