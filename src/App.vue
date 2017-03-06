<template lang="pug">
  div
    div#app
      div.navigation-bar
        a(href="#").logo K1-DOG
        ul.list-items-container
          li(v-for="i in list").navigation-list-item
            a(v-bind:href="i.link") {{i.title.toUpperCase() }}


      //- carousel.hero-section.parallax
      //-   slide.parallax
      //-   slide.parallax
      div#slider
        ul#slide-wrap
          li#slide1.slide.parallax
          li#slide2.slide.parallax
          li#slide3.slide.parallax
          //- li.slide.slide4.parallax


        a#prev(href="#") &#8810;
        a#next(href="#") &#8811;

        div#sliderNav
          div.dots.active
            a(href="#slide1")
          div.dots
            a(href="#slide2")
          div.dots
            a(href="#slide3")


      Corsi
      Sports
      Team


</template>

<script>
//- import { Carousel, Slide } from 'vue-carousel';
import Corsi from './components/Corsi.vue'
import Sports from './components/Sports.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'app',
  data () {
    return {
      list: [
        {
          title: "Corsi & Servizi",
          link: "#corsi"
        },
        {
          title: "Dog Sports",
          link: "#sports"
        },
        {
          title: "Team",
          link: "#team"
        },
        {
          title: "Contact Us",
          link: "#contact"
        }
      ]
    }
  },
  components: {
    Corsi,
    Sports,
    Team
  }
}
</script>

<style lang="scss">
  @import './assets/sass/main.scss';
</style>
