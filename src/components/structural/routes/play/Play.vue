<template>
  <div :class="$style.play_route_component_container">
    <div :class="$style.game_container">
      <div :class="$style.game_information_display_container">
        <div :class="$style.player_container">
          --player1username-- is --XorO-- <br>
          Wins:  --wins-- <br>
          Losses: --losses-- <br>
          Ties:  --ties--
        </div>
        <div :class="$style.player_container">
          --player2username-- is --XorO-- <br>
          Wins:  --wins-- <br>
          Losses: --losses-- <br>
          Ties:  --ties-- <br>
        </div>
      </div>
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
    </div>
    <div :class="$style.reset_password_link">
      <div :class="$style.reset_password">
        <a href="url">Reset Password?</a>
      </div>
      <label>
        <h1>Reset Password?</h1>
        <p>Old Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Old Password" 
          required
        >
        <p>New Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="New Password" 
          required
        >
        <p>Confirm New Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Confirm New Password" 
          required
        >
      </label>
    </div>
    <div :class="$style.submit_button">
      <button type="submit">
        Submit
      </button>
    </div>
    <div :class="$style.sign_out_button">
      <button type="submit">
        Sign Out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Play"
};
</script>

<style lang="scss" src="./styles.scss" module>

</style>