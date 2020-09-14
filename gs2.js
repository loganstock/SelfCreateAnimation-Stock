// Javascript

function onload() {
  var timeline = new TimelineMax;
  timeline.from('#mountains', 3, {y: 250, ease: Power4.easeOut});
  timeline.from('.st3', 3, {y: 250, ease: Power4.easeOut}, '-=3');
  timeline.from('#sun', 3, {y: -450, ease: Power4.easeOut}, '-=3');
  timeline.staggerFrom('#trees', 3, {y: 450, ease: Power4.easeOut}, 0.25,'-=3');
  timeline.staggerFrom('#shade', 3, {y: 450, ease: Power4.easeOut}, 0.25,'-=3');
  timeline.fromTo('#clouds', 60, {x: -1500}, {x:1500}, '-=3');
}