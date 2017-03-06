<template lang="pug">
  div#corsi
    h1 Corsi & Servizi
    div.all-courses-container
      div(v-for="corso in corsi").course-container
        img(v-bind:src="corso.image").img-course
        h3 {{ corso.title }}
        p.text-container {{ corso.description }} 

</template>


<script>
  export default {
    name: 'Corsi',
    data() {
      return {
        corsi: [
          {
            image: "",
            title: "Educazione di Base",
            description: "Questo corso serve ad aiutare il cane ad inserirsi correttamente nella società umana, insegnandogli comandi utili nella vita di tutti i giorni, come: seduto, terra, vieni, resta, etc. Apprenderete semplici nozioni al fine di creare una comunicazione efficace e un solido rapporto tra voi e il vostro amico a 4 zampe."
          },
          {
            image: "",
            title: "Attività Sportive",
            description: "Gli sport cinofili possono essere praticati da tutti i cani, di razza e meticci e da proprietari di tutte le età, anche bambini e disabili. L’agility dog, il disc dog, la rally-o, il cani-cross, la dog dance, la dog balance e gli sport acquatici, aiutano il binomio uomo/cane a rafforzare il proprio rapporto e sono utili a cani con scarsa autostima, insicuri e.. con una spiccata “voglia di fare”!!"
          },
          {
            image: "",
            title: "Recupero Comportamentale",
            description: "Questo è un percorso che va intrapreso nel momento in cui il vostro amico a 4 zampe manifesta atteggiamenti di aggressività verso altri cani e verso l'uomo, fobie, ansie e comportamenti ossessivi o compulsivi. Ogni cane è un caso a sé e va recuperato nel rispetto della sua dignità e della sua indole, insegnandogli una 'strada alternativa' a quella da lui erroneamente intrapresa, portandolo al raggiungimento di un equilibrio."
          },
          {
            image: "",
            title: "Pet Therapy",
            description: "É una terapia di supporto basata sull'interazione uomo-animale, che contribuisce al benessere psico-fisico-sociale del soggetto. Il nostro team ha esperienze nel campo, avendo partecipato a progetti finalizzati alla socializzazione e la cooperazione tra i gruppi classe, svolti in alcune scuole primarie e secondarie, affiancati da medico veterinario e pedagogista qualificati."
          },
          {
            image: "",
            title: "Wedding Service",
            description: "Vivi il giorno delle tue nozze con il tuo cane.. K1DOG pensa a tutto! Servizio di toelettatura personalizzata; servizio di dog sitter durante tutta la durata del matrimonio; sceglieremo l'abitino e gli accessori per rendere il tuo cane unico; ospiteremo il vostro cane nella nostra pensione sia per la notte delle nozze che per i giorni successivi."
          },
          {
            image: "",
            title: "Pensione e Asilo",
            description: "Devi partire? Hai un impegno improvviso? Lavori tutto il giorno e il tuo cane è sempre solo a casa? Lascialo da noi! Verrà ospitato in uno spazio pulito, sicuro, gestito e supervisionato da personale qualificato. Sarà coccolato e avrà ampie aeree verdi a disposizione per correre e divertirsi!"
          }
        ]
      }
    }
  }

</script>

<style lang="scss">
</style>
