import { TypeCar } from '../../types/types';

const GARAGE_ENDPOINT = 'garage';
const BASE_URL = 'http://localhost:3000';

export const createCar = async (name: string, color: string) => {
  console.log(name, color);
};

export const getCars = async (page: number, limit: number): Promise<{ cars: TypeCar[]; count: number } | null> => {
  try {
    const res = await fetch(`${BASE_URL}/${GARAGE_ENDPOINT}?_page=${page}&_limit=${limit}`);

    if (res.status === 200) {
      const cars: TypeCar[] = await res.json();

      return {
        cars,
        count: parseInt(res.headers.get('X-Total-Count') || '0', 10),
      };
    }

    return null;
  } catch (error) {
    return null;
  }
};
