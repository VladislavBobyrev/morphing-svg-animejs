
import '../style_light.css';
import anime from 'animejs/lib/anime.js';


const btn = document.querySelector('.btn-click');
const overlay = document.querySelector('#morph');
const interfase = document.querySelector('.interfase');

const morphing = anime({
  targets: '.morph',
  d: [
    {value: 'M1920 0H0V49C231.581 86.295 264.5 204 593 144.5C1031.5 39.5 1182.5 144.5 1182.5 144.5C1584.5 398.5 1920 328 1920 164V0Z  '},
    {value: 'M1920 0H0V728.5C169.5 303.5 626.5 844.449 955 706C1393.5 461.678 1585.5 535.5 1585.5 535.5C1920 564.5 1920 712 1920 635V0Z'},
    {value: 'M1919.94 -8H0V980C264.992 980 609.511 980.5 967 980.5C1439.63 980.5 1561.5 980 1561.5 980H1919.94V-8Z'}
  ],
  easing: 'easeInOutQuad',
  duration: 1300,
  loop: false,
  autoplay: false
});

btn.addEventListener('click', () =>
{
  const info = document.querySelector('.info');
  info.classList.remove('info-hide');
  morphing.restart();
  overlay.classList.add('pointer');
});