import { Injectable } from '@angular/core';
import { SolarScreenWindow } from './solar-screen-window';

@Injectable({
  providedIn: 'root',
})
export class SolarScreenWindowDataService {
  lastId: number = 0;

  solarScreenWindows: SolarScreenWindow[] = [];

  constructor() {}

  addSolarScreenWindow(
    solarScreenWindows: SolarScreenWindow
  ): SolarScreenWindowDataService {
    if (!solarScreenWindows.id) {
      solarScreenWindows.id = ++this.lastId;
    }

    this.solarScreenWindows.push(solarScreenWindows);
    return this;
  }

  deleteSolarScreenWindowById(id: number): SolarScreenWindowDataService {
    this.solarScreenWindows = this.solarScreenWindows.filter(
      (solarScreenWindow) => solarScreenWindow.id !== id
    );
    return this;
  }

  updateSolarScreenWindowById(
    id: number,
    values: object = {}
  ): SolarScreenWindow {
    let solarScreenWindow = this.getSolarScreenWindowById(id);
    if (!solarScreenWindow) {
      return null;
    }

    Object.assign(solarScreenWindow, values);

    return solarScreenWindow;
  }

  getAllSolarScreenWindows(): SolarScreenWindow[] {
    return this.solarScreenWindows;
  }

  getSolarScreenWindowById(id: number): SolarScreenWindow {
    return this.solarScreenWindows
      .filter((solarScreenWindow) => solarScreenWindow.id === id)
      .pop();
  }
}
