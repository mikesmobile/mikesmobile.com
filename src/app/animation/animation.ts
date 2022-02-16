import { animate, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [ // void => *, * => void
    animate(2000)
  ])
])

export let fadeFast = trigger('fadeFast', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [ // void => *, * => void
    animate(500)
  ])
])

export let moveLeft = trigger('moveLeft', [
  state('void', style({ marginLeft: 150 })),
  transition(':enter, :leave', [animate(2000)])
])

export let moveRight = trigger('moveRight', [
  state('void', style({ marginRight: 150 })),
  transition(':enter, :leave', [animate(2000)])
])

export let moveUp = trigger('moveUp', [
  state('void', style({ marginBottom: 150 })),
  transition(':enter, :leave', [animate(300)])
])

