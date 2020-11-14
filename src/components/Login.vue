<template>
<div id="login">
  <h1>Sign in</h1>
  <form novalidate @submit.prevent="login">
  <label for="email">Email:</label>
  <input type="text" v-model="email" value="email" id="email"><br>
  <label for="password">Password:</label>
  <input type="password" v-model="password" value="password" id="password">
    <router-link to="/forgot">forgot password?</router-link><br>
  <button type="submit">Sign In</button>
    <ul v-if="errors.length">
      <li v-for="error in errors" :key="error">
        {{error}}
      </li>
    </ul>
  </form>
  <hr>
  New to the covid advisor? <a><router-link to="/register">Register here</router-link></a> or
  <a><router-link to="/symptoms1">continue anonymously</router-link></a>.
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Login",
  data() {
    return {
      email:'',
      password:'',
      errors:[],
      username:''
    }
  },
  methods: {
    toggleSignIn(user) {
      this.$emit('toggleSignIn', user)
    },
    login() {
      this.errors=[]
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.toggleSignIn(data.user.displayName)
            this.$router.push('/')
          })
          .catch((error) => {
            this.errors.push(error.message)
          });

          /*
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              function getEvents() {
                return firebase.firestore().collection('accounts').doc(firebase.auth().currentUser.uid).get().then(
                    data => {
                      data.get('calendarEvents')
                    }
                )
              }
              var calendarEventsArray = getEvents();
              var arrayLength = calendarEventsArray.length;
              for (var i = 0; i < arrayLength; i++) {
                  console.log(calendarEventsArray[i].get("date", new Date().toISOString().slice(0, 10)));
                  var dict = {};
                  dict['id'] = String(i);
                  dict['title'] = 'Risk Assessment ' +i;
                  dict['startDate'] = calendarEventsArray[i].get("date", new Date().toISOString().slice(0, 10));
                  dict['endDate'] = calendarEventsArray[i].get("date", new Date().toISOString().slice(0, 10));
                  this.risks.push(dict);
              }
              this.props.navigator.push('friendsList')
              this.setState({
                loading: false
              })
            }
          })*/
    },
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