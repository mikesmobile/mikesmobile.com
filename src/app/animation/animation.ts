import { animate, sequence, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [ // void => *, * => void
        animate(2000)
    ])
])

export let moveLeft = trigger('moveLeft', [
    state('void', style({ marginLeft: 40 })),
    transition(':enter, :leave', [animate(2000)])
])

export let moveRight = trigger('moveLeft', [
    state('void', style({ marginRight: 40 })),
    transition(':enter, :leave', [animate(2000)])
])

export let float = trigger('float', [
    state('void', style({ transform: 'scale(2)'})),
    transition('void => *', [animate(2000)])
])

export const rowsAnimation =   trigger('rowsAnimation', [
    transition('void => *', [
      style({ 'height': '*', 'opacity': '0', 'transform': 'translateX(-550px)', 'box-shadow': 'none' }),
      sequence([
        animate('.35s ease', style({
          'height': '*',
          'opacity': '.2',
          'transform': 'translateX(0)',
          'box-shadow': 'none',
        })),
        animate('.35s ease', style({
          height: '*',
          opacity: 1,
          transform: 'translateX(0)',
        })),
      ]),
    ])
]);