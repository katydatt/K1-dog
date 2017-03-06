import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App),
});

var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slide-wrap");
  var count = 1;
  var items = slideList.querySelectorAll(".slide").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var dots = document.querySelectorAll('.dots');

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.classList.add('transition');
      slideList.style.left = "-" + count * sliderWidth + "px";
      dots[count].classList.add('active');
      dots[count+1].classList.remove('active');

      count++;
    }
    else if(count = 1) {
      count = items - 1;
      // slideList.classList.remove('transition');
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      slideList.classList.add('transition');
      slideList.style.left = "-" + count * sliderWidth + "px";
      dots[count-1].classList.remove('active');
      dots[count].classList.add('active');
      count++;

    }
    // else if(count = items) {
    //   slideList.style.left = - sliderWidth + "px";
    //   // slideList.classList.remove('transition');
    //   count = 1;
    // }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  
  // setInterval(function() {
  //   nextSlide()
  // }, 8000);

};

window.onload = function() {
  responsiveSlider();
}
