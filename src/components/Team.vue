<template lang="pug">
  div#team.layout-content
    h2 Il nostro Team

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

      textarea(name="body" rows="10" cols="60")

      p
      input(type="submit" name="send" value="Invia")


</template>


<script>
  export default {
    name: 'Team',
  }

</script>

<style lang="scss">
</style>
