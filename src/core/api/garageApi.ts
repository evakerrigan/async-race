import { TypeCar } from '../../types/types';

const GARAGE_ENDPOINT = 'garage';
const BASE_URL = 'http://localhost:3000';

export const setCar = async (name: string, color: string): Promise<TypeCar | null> => {
  console.log(name, color);
  try {
    const valueNameColor: { name: string; color: string } = { name, color };

    const res = await fetch(`${BASE_URL}/${GARAGE_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valueNameColor),
    });

    if (res.status === 201) {
      const car: TypeCar = await res.json();
      return car;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const getCars = async (page: number, limit: number): Promise<{ cars: TypeCar[]; count: number } | null> => {
  try {
    console.log('ЗАШЛИ В getCars');
    const res = await fetch(`${BASE_URL}/${GARAGE_ENDPOINT}?_page=${page}&_limit=${limit}`);

    if (res.status === 200) {
      const cars: TypeCar[] = await res.json();

      const count: number = parseInt(res.headers.get('X-Total-Count') || '0', 10);
      console.log('count = ', count);

      return {
        cars,
        count,
      };
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const removeCarServer = async (id: number): Promise<TypeCar | null> => {
  console.log(id);
  try {
    const res = await fetch(`${BASE_URL}/${GARAGE_ENDPOINT}/${id}`, {
      method: 'DELETE',
    });

    if (res.status === 200) {
      return null;
    }
    if (res.status === 404) {
      return null;
    }

    return null;
  } catch (error) {
    return null;
  }
};
