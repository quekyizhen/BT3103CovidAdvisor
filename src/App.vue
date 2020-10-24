<template>
  <div id="app">
    <div id="header">
      <router-link to="/symptoms" exact>Check your symptoms here</router-link>
      <h1><router-link to="/" exact>Covid Advisor</router-link></h1>

      <div v-if="signedin" class="link"><router-link to="/profile" exact>My Profile</router-link></div>
      <div v-else><div class="link"><router-link to="/login" exact>Login/Register</router-link></div></div>
      <div class="link"><router-link to="/symptoms" exact>Check your symptoms here</router-link></div>
      <div class="link"><router-link to="/stats" exact>Statistics</router-link></div>
    </div>
    <div id="photobar">
      <div class="titletext">Welcome, {{username}}.</div>
    </div>
    <div style="width:100%;">
      <router-view></router-view>
    </div>
    <div id="copyright">&#169; BT3103 Octopus 2020</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      username: "User",
      signedin: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding:0;
}

html, body {
  margin: 0px !important;
  padding: 0px !important;
}

a {
  text-decoration: none;
  color:inherit;
}

h1 {
  font-size:25px;
}

#default {
  overflow:auto;
}

.titletext {
  font-size:70px;
  float:right;
  margin: 100px 20% 50px 50px;
  width:400px;
  text-align:right;
}

#default {
  background:white;
}

#header {
  width:calc(100%- 40px);
  height:100px;
  color:black;
  background: #20344a;
  text-transform:uppercase;
  font-size:15px;
  overflow: auto;
  position: sticky;
}

#header h1 {
  display:inline-block;
  margin:0;
  font-weight: bold;
  line-height:100px;
  padding: 0 20px;
  color:white;
  float:left;
}

#header a {
  float:right;
  display:inline-block;
  padding:0 40px;
  font-weight: bold;
  line-height: 100px;
  transition:0.5s;
  color:white
}

.link a:hover {
  background: #4e5e70;
  transition:0.5s;
}

#photobar {
  background: url(https://static.tumblr.com/c1oapfr/2ysqip0tr/artboard_1.png) bottom;
  background-size: 100%;
  width:100%;
  height: 400px;
}

#copyright {
  width:calc(100% - 100px);
  height:50px;
  padding:50px;
  background:#20344a;
  color:white;
  font-weight:lighter;
  font-size:11px;
  line-height:50px;
}
</style>

