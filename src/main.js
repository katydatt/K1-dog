<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { scrollMixin } from './mixins'

Vue.config.productionTip = false
Vue.mixin(scrollMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
=======
import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App),
});

var SportSlides = new Swiper ('.swiper-container', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   speed: 500,
   slidesPerview: 'auto',
  //  centeredSlides: true,
   spaceBetween: 20,
   // If we need pagination
  //  pagination: '.swiper-pagination',
  //  paginationType: 'progress',

   // Navigation arrows
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',

});


function posY(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function isOffScreen( elm ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return (y > (vpH + st));
}


var courseContainers = document.querySelectorAll('.course-container');

window.addEventListener('scroll', function() {
  for(var i = 0; i < courseContainers.length; i++) {
    var course = courseContainers[i];
    if(isOffScreen(course)){
        course.classList.remove('text-in');
    } else {
        course.classList.add('text-in');
    }
  }
});
>>>>>>> 047045fed76eefbefab836ffdf481640f563e374
