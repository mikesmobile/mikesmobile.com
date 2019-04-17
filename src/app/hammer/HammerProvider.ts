import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerConfig } from './HammerConfig';

export const HammerProvider = {
  provide: HAMMER_GESTURE_CONFIG,
  useClass: HammerConfig
};
