<template>
  <div :class="$style.home_route_component_container">
    <div :class="$style.game_board_container">
      <div :class="$style.game_board">
        <div :class="$style.game_board_box">
          T
        </div>
        <div :class="$style.game_board_box">
          I
        </div>
        <div :class="$style.game_board_box">
          C
        </div>
        <div :class="$style.game_board_box">
          T
        </div>
        <div :class="$style.game_board_box">
          A
        </div>
        <div :class="$style.game_board_box">
          C
        </div>
        <div :class="$style.game_board_box">
          T
        </div>
        <div :class="$style.game_board_box">
          O
        </div>
        <div :class="$style.game_board_box">
          E
        </div>
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
