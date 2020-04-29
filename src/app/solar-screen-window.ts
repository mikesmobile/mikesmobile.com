export class SolarScreenWindow {
  id: number;
  name: string = 'Window';
  width: number;
  height: number;
  price: number;
  grid: boolean = false;
  gridMsg: string = '';

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
