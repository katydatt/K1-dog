<template lang='pug'>
    div#app.app-template
        div.logo
            img(src='./assets/images/logo.png').logo-img
        div.hero
            img(src='./assets/images/campo.jpg').hero-img
        Courses
        Sports
        Team
        Contact
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
                    title: 'Corsi & Servizi',
                    link: '#courses',
                    icon: 'fa-graduation-cap'
                },
                {
                    title: 'Dog Sports',
                    link: '#sports',
                    icon: 'fa-paw'
                },
                {
                    title: 'Team',
                    link: '#team',
                    icon: 'fa-users'
                },
                {
                    title: 'Contact Us',
                    link: '#contact',
                    icon: 'fa-phone'
                }
            ]
        }
    },
    components: {
        Courses,
        Sports,
        Team,
        Contact
    }
}
</script>

<style lang="scss">
    @import './assets/sass/main.scss';
</style>
