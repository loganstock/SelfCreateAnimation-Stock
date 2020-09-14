// Javascript

var power = 'off'

function load() {
  var powerButton = document.querySelector('.st5')
  powerButton.addEventListener('click', function() {play()})
}

function play() {
  if (power == 'off') {
    power = 'on';
    TweenMax.to('.st11', 2, {opacity: 1, ease: Power2.easeOut});
    TweenMax.fromTo("#one", 3, {y: 25, x: 25, delay: 2, fill: 'red', opacity: 0, ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 2, ease: Power3.easeOut});
    TweenMax.fromTo("#two", 3, {y: 25, x: 25, delay: 2.2, fill: 'orange', opacity: 0, ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 2.2, ease: Power3.easeOut});
    TweenMax.fromTo("#three", 3, {y: 25, x: 25, delay: 2.4, fill: 'yellow', opacity: 0, ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 2.4, ease: Power3.easeOut});
    TweenMax.fromTo("#four", 3, {y: 25, x: 25, delay: 2.6, fill: 'green', opacity: 0, ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 2.6, ease: Power3.easeOut});
    TweenMax.fromTo("#five", 3, {y: 25, x: 25, delay: 2.8, fill: 'teal', opacity: 0, ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 2.8, ease: Power3.easeOut});
    TweenMax.fromTo("#six", 3, {y: 25, x: 25, delay: 3, fill: 'blue', opacity: 0,  ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 3, ease: Power3.easeOut});
    TweenMax.fromTo("#seven", 3, {y: 25, x: 25, delay: 3.2, fill: 'purple', opacity: 0, ease: Power3.easeOut}, {opacity: 1, x: 0, y: 0, fill: 'blue', delay: 3.2, ease: Power3.easeOut});
  }
  else {
    power='off';
    TweenMax.to('.st11', 2, {opacity: 0, ease: Power2.easeOut});
    TweenMax.to('.st13', 2, {opacity: 0, ease: Power2.easeOut});
  }
}