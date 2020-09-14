// Javascript

var menuState = 'close'

function menu(el1) {
  if(menuState == 'close'){
    menuState = 'open';
    var elem1 = document.getElementById(el1);

    elem1.style.transition = "top 1s ease 0s";
    elem1.style.top = "25px";
  }
  else {
    menuState = 'close';
    var elem1 = document.getElementById(el1);

    elem1.style.transition = "top 1s ease 0s";
    elem1.style.top = "-40px";
  }
}

