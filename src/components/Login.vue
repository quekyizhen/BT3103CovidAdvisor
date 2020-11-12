<template>
<div id="login">
  <h1>Sign in</h1>
  <label for="username">Username:</label>
  <input type="username" v-model="username" value="username"><br>
  <label for="password">Password:</label>
  <input type="password" v-model="password" value="password"><br>
  <button @click="$emit('toggleSignIn', username)">Sign In</button>
  <hr>
  New to the covid advisor? <a><router-link to="/register">Register here</router-link></a> or
  <a><router-link to="/symptoms1">continue anonymously</router-link></a>.
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    toggleSignIn() {
      this.$emit('toggleSignIn', 'username')
    }
  }
}
</script>

<style scoped>
#login {
  padding:60px;
}
input {
  padding:10px;
  margin:20px;
}
label {
  padding:5px;
}
button {
  background-color: rgb(32,52,79);
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 8px 4px;
  cursor: pointer;
  border-radius: 8px;
}
a {
  color:#2c3e50;
  font-weight:bold;
  transition:0.5s;
}

a:hover {
  color: #456a9b;
  text-decoration: underline;
  transition:0.5s;
}
</style>