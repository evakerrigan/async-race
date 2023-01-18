import { TypeCar } from '../../types/types';

const GARAGE_ENDPOINT = 'garage';
const BASE_URL = 'http://localhost:3000';

export const setCar = async (name: string, color: string) => {
  console.log(name, color);
  try {
    const valueNameColor: { name: string; color: string } = { name, color };

    await fetch(`${BASE_URL}/${GARAGE_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valueNameColor),
    });

    return null;
  } catch (error) {
    return null;
  }
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
