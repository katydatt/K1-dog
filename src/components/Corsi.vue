<template lang="pug">
  div#corsi
    h2 I Nostri Corsi
    div.all-courses-container
      div(v-for="corso in corsi").course-container
        img(v-bind:src="corso.image").img-course
        div.text-container
          h3 {{ corso.title }}
          p.text {{ corso.description }}

</template>


<script>
  export default {
    name: 'Corsi',
    data() {
      return {
        corsi: [
          {
            image: "src/assets/images/dog-sit.jpg",
            title: "Educazione di Base",
            description: "Questo corso serve ad aiutare il cane ad inserirsi correttamente nella società umana, insegnandogli comandi utili nella vita di tutti i giorni. Apprenderete semplici nozioni al fine di creare una comunicazione efficace e un solido rapporto tra voi e il vostro amico a 4 zampe."
          },
          {
            image: "src/assets/images/dog-freesbie.jpg",
            title: "Attività Sportive",
            description: "Gli sport cinofili possono essere praticati da tutti i cani e da proprietari di tutte le età. L’agility dog, il disc dog, la rally-o, il cani-cross, la dog dance, la dog balance e gli sport acquatici, aiutano il binomio uomo/cane a rafforzare il proprio rapporto e sono utili a cani con scarsa autostima, insicuri e.. con una spiccata “voglia di fare”!!"
          },
          {
            image: "src/assets/images/aggressive-dogs.jpg",
            title: "Recupero Comportamentale",
            description: "Il vostro cane manifesta atteggiamenti di aggressività, fobie, ansie e comportamenti ossessivi o compulsivi? Ogni cane è un caso a sé e va recuperato nel rispetto della sua dignità e della sua indole, insegnandogli una 'strada alternativa' a quella da lui erroneamente intrapresa, portandolo al raggiungimento di un equilibrio."
          },
          {
            image: "src/assets/images/pet-therapy.jpg",
            title: "Pet Therapy",
            description: "Terapia di supporto, basata sull'interazione uomo-cane, che contribuisce al benessere psico-fisico-sociale del soggetto. Il nostro team ha partecipato a progetti finalizzati alla socializzazione e la cooperazione tra i gruppi classe, svolti in alcune scuole primarie e secondarie, affiancati da medico veterinario e pedagogista qualificati."
          },
          {
            image: "src/assets/images/wedding-dog.jpg",
            title: "Wedding Service",
            description: "Vivi il giorno delle tue nozze con il tuo cane.. K1DOG pensa a tutto! Servizio di toilettatura personalizzata; servizio di dog sitter durante tutta la durata del matrimonio; sceglieremo l'abitino e gli accessori per rendere il tuo cane unico; ospiteremo il vostro cane nella nostra pensione sia per la notte delle nozze che per i giorni successivi."
          },
          {
            image: "src/assets/images/campo.jpg",
            title: "Pensione e Asilo",
            description: "Devi partire? Hai un impegno improvviso? Lavori tutto il giorno e il tuo cane è sempre solo a casa? Lascialo da noi! Verrà ospitato in uno spazio pulito, sicuro, gestito e supervisionato da personale qualificato. Sarà coccolato e avrà ampie aeree verdi a disposizione per correre e divertirsi!"
          }
        ]
      }
    },
    methods: {
      show: function() {
        var content = document.querySelectorAll('.course-container');
        for(var i = 0, len = content.length; i < len; i++ ) {
          console.log(content[i]);
        }
      }
    }
  }

</script>

<style lang="scss">
</style>
