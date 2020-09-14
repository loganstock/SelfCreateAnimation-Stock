// Javascript

function onload() {
  TweenMax.to('.spin', 1, {rotation: 360, repeat: Infinity, ease: Power0.easeNone});
  TweenMax.to('.spin', 2, {opacity: 0, delay: 5, ease: Circ.easeOut});
  TweenMax.from('.body', 2, {opacity: 0, delay: 7, ease: Circ.easeOut})
}