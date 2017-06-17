<template lang="pug">
  div#team.layout-content
<<<<<<< HEAD
    h2 Il nostro Team
=======
    h1 Il nostro Team
>>>>>>> 047045fed76eefbefab836ffdf481640f563e374

    div.instructor
      h2.name Nicola Ratti
      img.instructor-pic
      p.description.
        Cat ipsum dolor sit amet, jump around on couch, meow constantly until given food, yet chase dog then run away. Scratch the furniture massacre a bird in the living room and then look like the cutest and most innocent

    div.instructor
      h2.name Marianna Minoia
      img.instructor-pic
      p.description.
        Cat ipsum dolor sit amet, jump around on couch, meow constantly until given food, yet chase dog then run away. Scratch the furniture massacre a bird in the living room and then look like the cutest and most innocent


    form(action="src/emailform.php" method="POST")

      p
        label
<<<<<<< HEAD
          |Il tuo indirizzo email:
        input(name="email" size="64" maxlength="64")
      p
        label
          |Nome:
        input(name="realname" size="64" maxlength="64")
      p
        label
        |Soggetto del tuo messaggio:
        input(name="subject" size="64" maxlength="64")

      p.
        Inserisci qui la tua richiesta di appuntamento:
=======
          |Your Email Address:
        input(name="email" size="64" maxlength="64")


      p
        label
          |Your Name
        input(name="realname" size="64" maxlength="64")

      p
        label
        |Subject Of Your Message
        input(name="subject" size="64" maxlength="64")
      p.
        Please enter the text of your message in the field that follows.
>>>>>>> 047045fed76eefbefab836ffdf481640f563e374

      textarea(name="body" rows="10" cols="60")

      p
<<<<<<< HEAD
      input(type="submit" name="send" value="Invia")
=======
      input(type="submit" name="send" value="Send Your Message")
>>>>>>> 047045fed76eefbefab836ffdf481640f563e374


</template>


<script>
  export default {
    name: 'Team',
  }

</script>

<style lang="scss">
</style>
