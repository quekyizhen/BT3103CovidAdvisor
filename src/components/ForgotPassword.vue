<template>
  <div id="forgot">
    <h1>Reset Password</h1>
    <form novalidate @submit.prevent="forgotPassword">
      <label for="email">Email:</label>
      <input type="text" v-model="email" value="email" id="email" style="padding:7px; margin:10px"><br><br>
      <button class="end" type="submit">Send reset password link</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email:''
    }
  },
  methods: {
    forgotPassword() {
        firebase
            .auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
              alert('Check your registered email to reset the password!')
            }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style scoped>
#forgot {
  padding:60px
}
</style>