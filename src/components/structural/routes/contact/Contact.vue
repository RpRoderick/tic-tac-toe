<template>
  <div :class="$style.contact_title">
    <p>
      Contact <span :class="$style.second_word">Info</span>
    </p>
    <hr>
  </div>
  <div :class="$style.contact_body">
    <h2>Matthew Roderick</h2>
    <p>Front End Developer</p>
    <br>
    <br>
    <h4>Website:</h4>
    <br>
    <a href="https://www.roderickdevelopers.com/">Roderickdevelopers.com</a>
    <br>
    <br>
    <hr>
    <h2>Ryan Roderick</h2>
    <p>Full Stack Developer</p>
    <br>
    <br>
    <h4>Website:</h4>
    <br>
    <a href="https://www.designmonster.com/">Designmonster.com</a>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" src="./styles.scss" module>
</style>
