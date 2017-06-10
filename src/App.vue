<template lang="pug">
  div
    div#app
      //- div.navigation-bar
        //- a(href="#").logo K1-DOG
         ul.list-items-container
          li(v-for="i in list").navigation-list-item
            a(v-bind:href="i.link").title-list {{i.title }}
            a(v-bind:href="i.link").icon-mobile
              i.fa.fa-2x(v-bind:class="i.icon" aria-hidden="true")
      div.logo
        img(src="./assets/images/logo.png").logo-img

      div.hero
        img(src="./assets/images/campo.jpg").hero-img

      //- div.swiper-container
      //-     //- Additional required wrapper
      //-     div.swiper-wrapper
      //-         //- Slides
      //-         div.swiper-slide.slide01
      //-         div.swiper-slide.slide02
      //-         div.swiper-slide.slide03
      //-
      //-
      //-     //- If we need pagination
      //-     div.swiper-pagination
      //-
      //-     //- If we need navigation buttons
      //-     div.swiper-button-prev
      //-     div.swiper-button-next



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
          link: "#corsi",
          icon: 'fa-graduation-cap'
        },
        {
          title: "Dog Sports",
          link: "#sports",
          icon: "fa-paw"
        },
        {
          title: "Team",
          link: "#team",
          icon: "fa-users"
        },
        {
          title: "Contact Us",
          link: "#contact",
          icon: "fa-phone"
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
