<template lang="pug">
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

<style lang="scss" scoped>
@import './assets/sass/main.scss';

#app {
    background-color: #f8f8f8;
}
.hero {
    @include mq($from: tablet) {
        height: 75vh;
    }
    overflow: hidden;
    .hero-img {
        width:100%;
        @include mq ($from: tablet) {
            margin-top: -300px;
        }
    }
}
.logo {
    text-align: center;

    @include mq($from: tablet) {
      width: 50%;
      margin: 0 auto;
    }
    .logo-img {
      margin: 20px auto;
      width:100%;
    }
}
.navigation-bar {
    height: 50px;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    @include mq($from: tablet) {
        justify-content: flex-end;
    }
    a,
    &:visited  {
        color: $mine-shaft;
        @include mq($from: tablet) {
            color: $dark-torquoise;
        }
    }
}
.list-items-container {
    padding: 5px;
    display: flex;
    margin: 0;
    .navigation-list-item {
        list-style-type: none;
        font-size: 14px;
        padding: 10px;
        margin: 10px;
        .title-list{
            display: none;
            color: $mine-shaft;
            @include mq($from: tablet) {
                display: block;
            }
        }
        .icon-mobile {
            @include mq($from: tablet) {
                display: none;
            }
        }
    }
}

.icon-mobile {
    color: $dark-torquoise
}

.swiper-container {
    @include mq($from: tablet) {
        margin-top: 0;
    }
}

</style>
