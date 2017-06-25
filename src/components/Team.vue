<template lang="pug">
    div#team.layout-content
        h2.title Il nostro Team
        div.instructor
            h2.name Nicola Ratti
            img(src="../assets/images/nicola.jpg").instructor-pic
            p.description.
                Cat ipsum dolor sit amet, jump around on couch, meow constantly until given food, yet chase dog then run away. Scratch the furniture massacre a bird in the living room and then look like the cutest and most innocent

        div.instructor
            h2.name Marianna Minoia
            img(src="../assets/images/marianna.jpg").instructor-pic
            p.description.
                Cat ipsum dolor sit amet, jump around on couch, meow constantly until given food, yet chase dog then run away. Scratch the furniture massacre a bird in the living room and then look like the cutest and most innocent

</template>

<script>
export default {
    name: 'Team'
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_vars.scss';
@import '../assets/sass/_helpers.scss';
@import '../assets/sass/_custom.scss';

.title {
    text-align: center;
}
.instructor {
    text-align: center;

    @include mq($from: tablet) {
        display: inline-block;
        width: 50%;
        vertical-align: top;
    }
    .name{
        margin-bottom: 20px;
    }
    .instructor-pic {
        border-radius: 50%;
        background-color: $dark-green;
        width: 200px;
        height: 200px;
    }
    .description {
        width: 80%;
        margin: 50px auto;
    }
}


</style>
