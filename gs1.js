// Javascript

function onload() {
  TweenMax.to('.one', 0.01, {scale: 20, transformOrigin:"50% 50%"});
  TweenMax.to('.two', 0.01, {scale: 20, transformOrigin:"50% 50%"});
  TweenMax.to('.three', 0.01, {scale: 20, transformOrigin:"50% 50%"});
  TweenMax.to('.four', 0.01, {scale: 20, transformOrigin:"50% 50%"});
  TweenMax.to('.five', 0.01, {scale: 20, transformOrigin:"50% 50%"});
  TweenMax.to('.six', 0.01, {scale: 20, transformOrigin:"50% 50%"});
  TweenMax.to('.seven', 0.01, {scale: 20, transformOrigin:"50% 50%"});
}

function zoom() {
  var timeline = new TimelineMax;
  TweenMax.to('.text', 1, {opacity: 1})
  timeline.fromTo('.one', 8, {scale: 20}, {scale: 0});
  timeline.fromTo('.two', 8, {scale: 20}, {scale: 0}, '-=7');
  timeline.fromTo('.three', 8, {scale: 20}, {scale: 0}, '-=7');
  timeline.fromTo('.four', 8, {scale: 20}, {scale: 0}, '-=7');
  timeline.fromTo('.five', 8, {scale: 20}, {scale: 0}, '-=7');
  timeline.fromTo('.six', 8, {scale: 20}, {scale: 0}, '-=7');
  timeline.fromTo('.seven', 8, {scale: 20}, {scale: 0}, '-=6.5');
}