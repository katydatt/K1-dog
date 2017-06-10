<template lang="pug">

  div#sports.layout-content
    div.parallax--sports
      h1 Dogs Activities

    //- Slider main container
    div.swiper-container
        //- Additional required wrapper
        div.swiper-wrapper
            //- Slides
            div(v-for="sport in sports").swiper-slide
              h3.title-sport {{ sport.name }}
              p.sport-description {{ sport.description }}

        //- If we need pagination
        div.swiper-pagination

        //- If we need navigation buttons
        div.swiper-button-prev
          img(src="src/assets/images/carousel-left-white.svg")

        div.swiper-button-next
          img(src="src/assets/images/carousel-right-white.svg")


</template>


<script>
  export default {
    name: 'Sports',
    data() {
      return {
        sports: [
          {
            name: "Agility Dog",
            description: "É la disciplina cinofila più amata e praticata a livello mondiale. Si tratta di un percorso fatto da ostacoli: salti, tunnel, slalom, palizzata, passerella, bascula e ruota. Il binomio (cane/proprietario), dovrà correre e superarli, seguendo l’ordine previsto, senza commettere errori e nel minor tempo possibile. Imparerete a condurre il vostro cane nel percorso usando i comandi e le tecniche di addestramento a lui più opportune."
          },
          {
            name: "Disc Dog",
            description: "Questo sport va praticato all’aria aperta e tutto ciò che serve sono dei frisbee e voglia di divertirsi con il proprio cane! Nicola Ratti (Istruttore Federale Disc dog Italia; Guinness World Record 2010; qualificato ai mondiali Skyhoundz 2010; 1°Classificato Gara Internazionale di Discdog; Medaglia di bronzo Dog Olimpic Games 2010), vi insegnerà diversi stili di lancio e, soprattutto, a lanciare i dischi in modo corretto, per facilitare la presa e l’atterraggio del cane."
          },
          {
            name: "Rally-O",
            description: "É una disciplina che valuta le capacità di un binomio di eseguire una routine di esercizi. Il tutto si svolge in un percorso fatto da cartelli stazionionari, che forniscono istruzioni riguardanti il comando da eseguire. Bisogna svolgere il percorso rispettando il tempo massimo di percorrenza, che si differenzia per grado d’appartenenza."
          },
          {
            name: "Cani-Cross",
            description: "Ti piace correre? Fallo insieme al tuo cane! Il cani-cross è una disciplina cinofila in cui cane e padrone corrono su un percorso sterrato, uniti  tramite cintura, linea e apposita pettorina. Va insegnato al cane a mantenere un’andatura costante per tutta la durata del percorso, in modo tale che i due vadano a formare un binomio sempre più affiatato, in cui il cane ci aiuti tirandoci."
          },
          {
            name: "Dog Dance",
            description: "Lo scopo di questa disciplina non è far ballare il cane, ma di eseguire una serie di esercizi insieme al conduttore in modo fluido e armonioso tale da risultare a tempo di musica. L’impressione è quella di una coppia affiatata che balla, ma dietro c’è soprattutto profonda comprensione del cane, ottimo feeling e voglia di mettersi in gioco!"
          },
          {
            name: "Sport Acquatici",
            description: "Lo Splash Dog, Cani in Canoa o il semplice nuoto, hanno lo scopo di favorire il divertimento e lo sviluppo delle naturali doti acquatiche di cane e conduttore e di essere propedeutiche., ad un eventuale approfondimento del lavoro socialmente utile in acqua di cane e conduttore."
          },
          {
            name: "Dog Balance",
            description: "Si intende una serie di esercizi eseguiti con l’aiuto di attrezzi propriocettivi e di equilibrio volti ad aumentare l’equilibrio e la coordinazione nel cane, stimolare, sviluppare la capacità del corpo di percepire la propria staticità e il proprio movimento e passare dall’una all’altro restando perfettamente in equilibrio.Gli esercizi propriocettivi stimolano la muscolatura in modo da evitare durante il gioco e/o lo sport delle contrazioni isolate, sollecitando gruppi o combinazioni di gruppi muscolari."
          }
        ]
      }
    }
  }

</script>

<style lang="scss">
</style>
