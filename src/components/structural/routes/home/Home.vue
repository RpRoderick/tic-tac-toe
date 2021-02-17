<template>
  <div :class="$style.home_component_container">
    <div :class="$style.game_board_container">
      <div :class="$style.game_board">
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
        <div :class="$style.game_board_box" />
      </div>
    </div>
    <div :class="$style.header_message_container">
      <p>Let's <span :class="$style.bold_word">Play!</span></p>
    </div>
    <div :class="$style.pagination_box_container">
      <UserCredentialsMenu />
    </div>
  </div>
</template>

<script>
import UserCredentialsMenu from '@/components/structural/ui/user-credentials-menu/UserCredentialsMenu.vue'

export default {
  name: "Home",
  components: {
    UserCredentialsMenu
  }
};
</script>

<style lang="scss" src="./styles.scss" module>

</style>
