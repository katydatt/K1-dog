<template lang="pug">
    div#courses.courses-template.layout-content
      h2.course-header I NOSTRI CORSI

      div.wrap
        div(v-for='course in courses').container
          div.img-container(v-bind:style='course')
            img(v-bind:src='getImageUrl(course.image)').img
          div.text-container
            h3.title {{ course.title }}
            p.text {{ course.description }}
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
                    description: 'Questo corso serve ad aiutare il cane ad inserirsi correttamente nella società umana, insegnandogli comandi utili nella vita di tutti i giorni. Apprenderete semplici nozioni al fine di creare una comunicazione efficace e un solido rapporto tra voi e il vostro amico a 4 zampe.'
                },
                {
                    image: 'dog-freesbie',
                    title: 'Attività Sportive',
                    order: 2,
                    description: 'Gli sport cinofili possono essere praticati da tutti i cani e da proprietari di tutte le età. L’agility dog, il disc dog, la rally-o, il cani-cross, la dog dance, la dog balance e gli sport acquatici, aiutano il binomio uomo/cane a rafforzare il proprio rapporto e sono utili a cani con scarsa autostima, insicuri e.. con una spiccata “voglia di fare”!!'
                },
                {
                    image: 'aggressive-dogs',
                    title: 'Recupero Comportamentale',
                    description: 'Il vostro cane manifesta atteggiamenti di aggressività, fobie, ansie e comportamenti ossessivi o compulsivi? Ogni cane è un caso a sé e va recuperato nel rispetto della sua dignità e della sua indole, insegnandogli una `strada alternativa` a quella da lui erroneamente intrapresa, portandolo al raggiungimento di un equilibrio.'
                },
                {
                    image: 'pet-therapy',
                    title: 'Pet Therapy',
                    order: 2,
                    description: 'Terapia di supporto, basata sull`interazione uomo-cane, che contribuisce al benessere psico-fisico-sociale del soggetto. Il nostro team ha partecipato a progetti finalizzati alla socializzazione e la cooperazione tra i gruppi classe, svolti in alcune scuole primarie e secondarie, affiancati da medico veterinario e pedagogista qualificati.'
                },
                {
                    image: 'wedding-dog',
                    title: 'Wedding Service',
                    description: 'Vivi il giorno delle tue nozze con il tuo cane.. KtrueDOG pensa a tutto! Servizio di toilettatura personalizzata; servizio di dog sitter durante tutta la durata del matrimonio; sceglieremo l`abitino e gli accessori per rendere il tuo cane unico; ospiteremo il vostro cane nella nostra pensione sia per la notte delle nozze che per i giorni successivi.'
                },
                {
                    image: 'campo',
                    title: 'Pensione e Asilo',
                    order: 2,
                    description: 'Devi partire? Hai un impegno improvviso? Lavori tutto il giorno e il tuo cane è sempre solo a casa? Lascialo da noi! Verrà ospitato in uno spazio pulito, sicuro, gestito e supervisionato da personale qualificato. Sarà coccolato e avrà ampie aeree verdi a disposizione per correre e divertirsi!'
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

<style lang='scss' scoped>
@import '../assets/sass/_vars.scss';
@import '../assets/sass/_helpers.scss';
@import '../assets/sass/_custom.scss';


.wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.container {
  width: 100%;
  height: auto;
  margin: 15px 10px;
  background-color: $white;
  @include mq($from: tablet) {
    width: 100%;
    margin: 5% auto;
    display: flex;
  }
  .img-container {
    height: 50%;
    margin: 0 auto;
    width: 100%;
    background-color: $yellow;
    // border-radius: 50%;
    overflow: hidden;
    @include mq($from: tablet) {
      width: 30%;
      height: 230px;
      // border-radius: 50%;
      overflow: hidden;
    }
  }
  .img {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .text-container {
    margin: 20px auto;
    width: 90%;
    position: relative;
    @include mq($from: tablet) {
      width: 70%;
      height: auto;
      vertical-align: top;
      .title {
        position: absolute;
        top: 10%;
        @include center(x);
      }
      .text {
        position: absolute;
        top: 30%;
        width: 85%;
        word-wrap: break-word;
        @include center(x);
      }
    }
  }
}

</style>
