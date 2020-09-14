// Javascript

function onload() {
  var timeline = new TimelineMax;
  timeline.from('.big', 3, {y: -1000, ease: Bounce.easeOut});
  timeline.from('.medium', 2, {scale: 0, ease: Circ.easeIn});
  timeline.from('.link', 2, {x: -1000, ease: Power4.ease});
  timeline.from('.small', 2, {opacity: 0, ease: Power1.easeInOut});
}