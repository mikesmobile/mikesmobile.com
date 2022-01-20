import { animate, query, sequence, stagger, state, style, transition, trigger } from "@angular/animations";

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

export let moveRight = trigger('moveRight', [
    state('void', style({ marginRight: 40 })),
    transition(':enter, :leave', [animate(2000)])
])

export let float = trigger('float', [
    state('void', style({ transform: 'scale(2)'})),
    transition('void => *', [animate(2000)])
])

export let staggerEffect = trigger('staggerEffect', [
  transition(':enter', [
    query('.hero', [
      style({opacity: 0, transform: 'translateY(-100px)'}),
      stagger(30, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
        style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ])
])