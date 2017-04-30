import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App),
});

var SportSlides = new Swiper ('.swiper-container', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerview: auto,
   spaceBetween: 20,
   // If we need pagination
   pagination: '.swiper-pagination',

   // Navigation arrows
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',

});
