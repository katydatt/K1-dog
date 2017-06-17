<template lang="pug">
  div
    div#app.app-template

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

      Courses
      Sports
      Team


</template>

<script>

import Courses from './components/Courses.vue'
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
          link: "#courses",
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
    Courses,
    Sports,
    Team
  }
}
</script>

<style lang="scss">
  @import './assets/sass/main.scss';
</style>
