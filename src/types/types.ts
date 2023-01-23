export type TypeHTMLElement = HTMLElement | HTMLLIElement | HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement;

export interface TypeObjectClass {
  [key: string]: string | number | boolean;
}
export type TypePage = {
  page: string;
};
export type TypeCar = {
  id: number;
  name: string;
  color: string;
};
export type TypeValueRace = {
  velocity: number;
  distance: number;
};

export type TypeGarageState = {
  page?: number;
  limit?: number;
  count?: number;
  cars?: TypeCar[];
};

export type TypeStore<TState> = {
  state: TState;
  subscribers: Map<string, () => void>;
  setState: (props: TState) => void;
  getState: () => TState;
  subscribe: (key: string, render: () => void) => void;
};

export type TypeCarStore<TState> = {
  state: TState;
  setState: (props: TState) => void;
  getState: () => TState;
};
