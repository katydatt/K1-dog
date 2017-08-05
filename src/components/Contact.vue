<template lang="pug">
    div#contact
        div.email
            h2 Mandaci un messaggio

            form.email-form
                label(for="name").label
                    |Nome:
                input(type="text" name="firstName" placeholder="Inserisci il tuo nome").text-box.input

                label(for="lastName").label
                    |Cognome:
                input(type="text" name="lastName" placeholder="Inserisci il tuo cognome").text-box.input

                label(for="email").label
                    |Indirizzo e-mail: <span class="required">*</span>
                input(type="email" name="email" placeholder="Inserisci la tua email").text-box.input

                label(for="message").label
                    |Messaggio:
                textarea(type="text" name="message" placeholder="scrivi il tuo messaggio...").text-box.message

                button(type="submit").send-btn
                    |Invia

        div.social
            p.social-title
                |Seguici su
            a(v-for="social in socials" v-bind:class="social.name" v-bind:href="social.url" target="_blank").social-url
                img(v-bind:src='getImageUrl(social.image)')
</template>

<script>
export default {
    name: 'Contact',
    data () {
        return {
            socials: [
                {
                    name: 'facebook',
                    url: 'https://www.facebook.com/K1dog/',
                    image: 'facebook'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/k1dogweddingservice/',
                    image: 'instagram'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/K1DOG_MONOPOLI',
                    image: 'twitter'
                }
            ]
        }
    },
    methods: {
        getImageUrl (image) {
            var pic = require('../assets/images/' + image + '.png')
            return pic
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_vars.scss';
@import '../assets/sass/_helpers.scss';
@import '../assets/sass/_custom.scss';

#contact {
    display: flex;
    flex-direction: column;
    margin-bottom:50px;

    @include mq($from: tablet) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
}
.email {
    @include mq($from: tablet) {
        width: 70%;
    }
}
.email-form {
    width: 90%;
    @include mq($from: tablet) {
        width: 100%;
    }
    margin: 0 auto;
}
.label {
    display: block;
    text-align: left;
    margin: 10px 0;
}
.required {
    color: red;
}
.text-box {
    width: 80%;
    border-radius: 4px;
    border: 1px solid $silver-chalice;
    background-color: #fff;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    background-image: none;
    padding: 6px 12px;
    font-size: 14px;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

::-webkit-input-placeholder { color: $silver-chalice; }
::-moz-placeholder {color: $silver-chalice; }
:-ms-input-placeholder { color: $silver-chalice; }
:-o-input-placeholder { color: $silver-chalice; }

.input{
    height: 34px
}
.message {
    height: 50px;
}
.send-btn {
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    margin: 20px 0 20px 80%;
}
.social {
    text-align: center;
    @include mq($from: tablet){
        display: flex;
        flex-direction: column;
    }
}
.social-url {
    width: 50px;
    display:inline-block;
    margin: 10px;

    img {
        width: 100%;
    }
    :hover {
        transform: scale(1.2);
    }
}
</style>
