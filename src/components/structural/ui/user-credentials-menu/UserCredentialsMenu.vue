<template>
  <div :class="$style.ui_container">


    <div :class="$style.ui_container_navigation_container">
      <button 
        :class="$style.navigation_menu_item"
        @click="signInVisible"
      >
        Sign In
      </button>
      <button 
        :class="$style.navigation_menu_item"
        @click="signUpVisible"  
      >
        Sign Up
      </button>
    </div>


    <div 
      v-if="signIn"
      :class="$style.ui_form"
    >
      <label>
        <p>User Name</p>
        <input 
          type="text" 
          name="name" 
          placeholder="User Name" 
          required
        >
        <div
          :class="$style.ui_link"
          @click="forgotUsernameVisible"
        >
          <u>Forgot Username?</u>
        </div>
        <p>Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Password" 
          required
        >
      </label>
      <div 
        :class="$style.ui_link"
        @click="forgotPasswordVisible"
      >
        <u>Forgot Password?</u>
      </div>
      <div :class="$style.ui_button_container">
        <button type="submit">
          Login
        </button>
      </div>
    </div>



    <div
      v-if="signUp"
      :class="$style.ui_form"
    >
      <label>
        <p>User Name</p>
        <input 
          type="text" 
          name="name" 
          placeholder="User Name" 
          required
        >
      </label>
      <label>
        <p>Email</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Email" 
          required
        >
      </label>
      <label>
        <p>Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Password" 
          required
        >
      </label>
      <label>
        <p>Confirm Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Confirm Password" 
          required
        >
      </label>
      <div :class="$style.ui_button_container">
        <button type="submit">
          Sign Up
        </button>
      </div>
    </div>


    <div 
      v-if="forgotUsername"
      :class="$style.ui_form"
    >
      <label>
        <h1>Forgot User Name?</h1>
        <p>Email</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Email"
          required
        >
        <p>Password</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Password" 
          required
        >
      </label>
      <div :class="$style.ui_button_container">
        <button type="submit">
          Login
        </button>
      </div>
    </div>


    <div 
      v-if="forgotPassword"
      :class="$style.ui_form"
    >
      <label>
        <h1>Forgot Password?</h1>
        <p>User Name</p>
        <input 
          type="text" 
          name="name" 
          placeholder="User Name" 
          required
        >
        <p>Email</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Email" 
          required
        >
      </label>
      <div :class="$style.ui_button_container">
        <button type="submit">
          Login
        </button>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "UserCredentialsMenu",
  data: function() {
    return {
      signIn: true,
      signUp: false,
      forgotUsername: false,
      forgotPassword: false,
    };
  },
  methods: {
    signInVisible() {
      console.log("You are in signInVisible click method");
      this.signIn = true;
      this.signUp = false;
      this.forgotUsername = false;
      this.forgotPassword = false;
    },
    signUpVisible() {
      console.log("You are in signUpVisible click method");
      this.signUp = true;
      this.signIn = false;
      this.forgotUsername = false;
      this.forgotPassword = false;
    },
    forgotUsernameVisible() {
      console.log("You are in forgotUsernameVisible click method");
      this.forgotUsername = true;
      this.signIn = false;
      this.signUp = false;
      this.forgotPassword = false;
    },
    forgotPasswordVisible() {
      console.log("You are in forgotPasswordVisible click method");
      this.forgotPassword = true;
      this.forgotUsername = false;
      this.signIn = false;
      this.signUp = false;
    },
  }
};
</script>

<style lang="scss" src="./styles.scss" module>

</style>