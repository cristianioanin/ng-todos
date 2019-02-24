import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export const bounceOutLeftAnimation = animation(
	animate(
		'.4s ease-in',
		keyframes([
			style({
				offset: 0.2,
				opacity: 1,
				transform: 'translateX(20px)'
			}),
			style({
				offset: 1,
				opacity: 0,
				transform: 'translateX(-100%)'
			})
		])
	)
);

export const fadeInAnimation = animation(
	[
		style({
			opacity: 0
		}),
		animate('{{ duration }} {{ easing }}')
	],
	{
		params:
			{
				duration: '.4s',
				easing: 'ease-out'
			}
	}
);

export const fadeOutAnimation = animation([
	animate(
		400,
		style({
			opacity: 0
		})
	)
]);

export const fade = trigger('fade', [
	transition(':enter', useAnimation(fadeInAnimation)),
	transition(':leave', useAnimation(fadeOutAnimation))
]);

export const slide = trigger('slide', [
	transition(':enter', [
		style({
			transform: 'translateX(-10px)'
		}),
		animate('.4s ease-out')
	]),
	transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
