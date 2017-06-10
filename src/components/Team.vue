<template lang="pug">
  div#team.layout-content
    h1 Il nostro Team

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

      textarea(name="body" rows="10" cols="60")

      p
      input(type="submit" name="send" value="Send Your Message")


</template>


<script>
  export default {
    name: 'Team',
  }

</script>

<style lang="scss">
</style>
