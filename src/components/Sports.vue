<template lang="pug">
    div#sports
        div.parallax
            h1.title Dogs Activities
            //- Slider main container
        div.swiper-container.center-content(ref='slider')
            //- Additional required wrapper
            div.swiper-wrapper
                //- Slides
                div(v-for='sport in sports').swiper-slide
                    h3.title-sport {{ sport.name }}
                    p.sport-description {{ sport.description }}

            //- If we need pagination
            div.swiper-pagination
                //- If we need navigation buttons
            div.swiper-button-prev
                img(src='../assets/images/carousel-left-white.svg')

            div.swiper-button-next
                img(src='../assets/images/carousel-right-white.svg')
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'Sports',
    data () {
        return {
            viewportWidth: false,
            slider: false,
            sports: [
                {
                    name: 'Agility Dog',
                    description: 'É la disciplina cinofila più amata e praticata a livello mondiale. Si tratta di un percorso fatto da ostacoli: salti, tunnel, slalom, palizzata, passerella, bascula e ruota. Il binomio (cane/proprietario), dovrà correre e superarli, seguendo l’ordine previsto, senza commettere errori e nel minor tempo possibile. Imparerete a condurre il vostro cane nel percorso usando i comandi e le tecniche di addestramento a lui più opportune.'
                },
                {
                    name: 'Disc Dog',
                    description: 'Questo sport va praticato all’aria aperta e tutto ciò che serve sono dei frisbee e voglia di divertirsi con il proprio cane! Nicola Ratti (Istruttore Federale Disc dog Italia; Guinness World Record 2010; qualificato ai mondiali Skyhoundz 2010; 1°Classificato Gara Internazionale di Discdog; Medaglia di bronzo Dog Olimpic Games 2010), vi insegnerà diversi stili di lancio e, soprattutto, a lanciare i dischi in modo corretto, per facilitare la presa e l’atterraggio del cane.'
                },
                {
                    name: 'Rally-O',
                    description: 'É una disciplina che valuta le capacità di un binomio di eseguire una routine di esercizi. Il tutto si svolge in un percorso fatto da cartelli stazionionari, che forniscono istruzioni riguardanti il comando da eseguire. Bisogna svolgere il percorso rispettando il tempo massimo di percorrenza, che si differenzia per grado d’appartenenza.'
                },
                {
                    name: 'Cani-Cross',
                    description: 'Ti piace correre? Fallo insieme al tuo cane! Il cani-cross è una disciplina cinofila in cui cane e padrone corrono su un percorso sterrato, uniti  tramite cintura, linea e apposita pettorina. Va insegnato al cane a mantenere un’andatura costante per tutta la durata del percorso, in modo tale che i due vadano a formare un binomio sempre più affiatato, in cui il cane ci aiuti tirandoci.'
                },
                {
                    name: 'Dog Dance',
                    description: 'Lo scopo di questa disciplina non è far ballare il cane, ma di eseguire una serie di esercizi insieme al conduttore in modo fluido e armonioso tale da risultare a tempo di musica. L’impressione è quella di una coppia affiatata che balla, ma dietro c’è soprattutto profonda comprensione del cane, ottimo feeling e voglia di mettersi in gioco!'
                },
                {
                    name: 'Sport Acquatici',
                    description: 'Lo Splash Dog, Cani in Canoa o il semplice nuoto, hanno lo scopo di favorire il divertimento e lo sviluppo delle naturali doti acquatiche di cane e conduttore e di essere propedeutiche., ad un eventuale approfondimento del lavoro socialmente utile in acqua di cane e conduttore.'
                },
                {
                    name: 'Dog Balance',
                    description: 'Si intende una serie di esercizi eseguiti con l’aiuto di attrezzi propriocettivi e di equilibrio volti ad aumentare l’equilibrio e la coordinazione nel cane, stimolare, sviluppare la capacità del corpo di percepire la propria staticità e il proprio movimento e passare dall’una all’altro restando perfettamente in equilibrio.Gli esercizi propriocettivi stimolano la muscolatura in modo da evitare durante il gioco e/o lo sport delle contrazioni isolate, sollecitando gruppi o combinazioni di gruppi muscolari.'
                }
            ]
        }
    },
    mounted () {
        this.createSlider()
    },
    methods: {
        createSlider () {
            if (!this.slider) {
                this.slider = new Swiper(this.$refs.slider, {
                    // Optional parameters
                    direction: 'horizontal',
                    loop: false,
                    speed: 500,
                    slidesPerview: 'auto',
                    centeredSlides: true,
                    spaceBetween: 20,
                    // If we need pagination
                    //  pagination: '.swiper-pagination',
                    //  paginationType: 'progress',

                    // Navigation arrows
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                })
            }
        },
        destroySlider () {
            if (this.slider) {
                this.slider.destroy(true, true)
            }
        }

    }
}

</script>

<style lang="scss" scoped>
@import '../assets/sass/_vars.scss';
@import '../assets/sass/_helpers.scss';
@import '../assets/sass/_custom.scss';
@import '../assets/sass/_swiper.scss';


.center-content {
    width: 100%;
    margin: 50px auto;
}
.parallax {
    min-height: 400px;
    background-image: url('../assets/images/dog-agility-camp.jpg');
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    // background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    opacity: 0.8;
}
.title {
    position: absolute;
    @include center(xy);
    width: 100%;
    font-size: 4em;
    margin: 0;
}
.title-sport {
    @include mq($from: tablet) {
        text-align: right;
        padding-right: 50px;
    }
}
.sport-description {
    padding: 0 25px;
    @include mq($from: tablet) {
        text-align: right;
        width: 50%;
        margin-left: 40%;
    }
}

// Swiper adjustment
.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    @include center(y);
}

.swiper-button-prev {
    left: 0;
}

.swiper-button-next {
    right: 0;
}

.swiper-container {
    margin: 80px auto;
    width: 90%;
}

.swiper-slide {
    @include mq($from: tablet) {
        display: flex;
        align-content: flex-end;
        flex-direction: column;
    }
}

</style>
