<template lang="pug">
    div#courses.courses-template.layout-content
        h2.course-header I NOSTRI CORSI

        div.wrap.layout-content
            div(v-for='course in courses').container
                div.text-container
                    h3.title(v-bind:class='course.class') {{ course.title }}
                div.img-container(v-bind:style='course')
                    img(v-bind:src='getImageUrl(course.image)').img
                    div.overlay
                    p(v-html="course.description").text

</template>

<script>
export default {
    name: 'Corsi',
    data () {
        return {
            courses: [
                {
                    image: 'dog-sit',
                    title: 'Educazione di Base',
                    description: 'Per creare una comunicazione efficace e un solido rapporto tra voi e il vostro amico a 4 zampe, insegnali comandi utili per la vita di tutti i giorni.'
                },
                {
                    image: 'dog-freesbie',
                    title: 'Attività Sportive',
                    description: 'Queste attivita` aiutano il binomio uomo/cane a rafforzare il proprio rapporto e sono utili a cani con scarsa autostima, insicuri o con una spiccata “voglia di fare”!!<br><a href="#sports">Vedi qui</a>'
                },
                {
                    image: 'aggressive-dogs',
                    title: 'Recupero Comportamentale',
                    description: 'Se il vostro cane manifesta atteggiamenti di aggressività, fobie, ansie o comportamenti ossessivi/compulsivi, insegnamoli una strada alternativa rispettando la sua dignita`.'
                },
                {
                    image: 'campo',
                    title: 'Pensione e Asilo',
                    description: 'Il tuo migliore amico in vacanza con noi! Verrà ospitato in uno spazio pulito, sicuro, gestito da personale qualificato. Sarà coccolato e avrà ampie aeree verdi a disposizione per correre e divertirsi!'
                },
                {
                    image: 'pet-therapy',
                    title: 'Pet Therapy',
                    description: "Terapia di supporto, basata sull'interazione uomo-cane, che contribuisce al benessere psico-fisico-sociale del soggetto."
                },
                {
                    image: 'wedding-dog',
                    title: 'Wedding Service',
                    description: "Vivi il giorno delle tue nozze con il tuo cane.. K1DOG pensa a tutto! Dall'abitino al pernottamento per il tuo amico a 4 zampe!"
                }
            ]
        }
    },
    methods: {
        getImageUrl (image) {
            var pic = require('../assets/images/' + image + '.jpg')
            return pic
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_vars.scss';
@import '../assets/sass/_helpers.scss';
@import '../assets/sass/_custom.scss';


.wrap {
    text-align: center;
}

.container {
    width: 100%;
    height: auto;

    @include mq($from: tablet) {
        width: 300px;
        display: inline-block;
        margin: 1rem;
        vertical-align: top;
    }
    &:hover {
        .text {
            opacity: 1;
            transition: opacity 0.8s;
        }
        .overlay {
            background-color: $black;
            opacity: 0.3;
            transition: opacity 0.8s;

        }
    }
}
.overlay {
    opacity: 0;
    position: absolute;
    @include center(xy);
    height: 100%;
    margin: 0;
    width: 100%;
}
.img-container {
    position: relative;
}


.text {
    opacity: 0;
    position: absolute;
    color: $white;
    text-shadow: 2px 2px 2px $black;
    @include center(xy);
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.2;
    width: 90%;
    a {

        text-decoration: underline;
        &:visited {
            color: $black;
        }
    }
}
.img {
    display: block;
    margin: 0 auto;
    width: 100%;
    @include mq($from: tablet) {
        height: 200px;
    }
}
.text-container {
    margin-top: 3rem;
}

.title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid $black;
}

</style>
