<template>
  <div id="register">
    <form novalidate @submit.prevent="submit">
    <h1>Personal Information:</h1>
    <div>
      <label for="fname">First Name:
        <input type="text" v-model="form.fname" value="fname" id="fname">
      </label>
      <br><br>

      <label for="lname">Last Name:
        <input type="text" v-model="form.lname" value="lname" id="lname">
      </label>
      <br><br>

      <label for="gender">Gender:
        <select v-model="form.gender" id="gender">
          <option disabled value=""></option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label><br><br>

      <label for="age">Age:
        <input type="number" v-model="form.age" value="age" id="age">
      </label>
      <br><br>

      <label for="email">Email:
        <input type="text" v-model="form.email" value="email" id="email">
      </label> <br><br>
      <br>
    </div>

    <br><br>

    <h1>Password:</h1>
    <h4>Please follow the requirements to create your password</h4>
      <ul v-for="rule in rules" :key="rule">
        <li>{{rule.message}}</li>
      </ul>
    <div class="items">

      <label for="password">Password:
        <input :type="passwordFieldType" v-model="form.password" value="password" id="password">
      </label> <br><br>

      <label for="cpassword">Confirm Password:
        <input :type="passwordFieldType" v-model.lazy="form.cpassword" value="cpassword" id="cpassword">
      </label> <br><br>

      <button type="button" @click="switchVisibility">show / hide password</button>
      <br><br>

      <div id="errors" v-if="errors.length">
        <ul>
        <li v-for="error in errors" :key="error">
          {{error}}
        </li>
        </ul>
      </div>

    </div>
      <div class="special"><button type="submit">
        Register
      </button>
      </div>
    </form>

  </div>
</template>

<script>

import validate from "../validation-module.js"
import firebase from "firebase"

export default {
  name: "Register",
  data: function () {
    return {
      rules: [
        {message: 'One lowercase letter required.', regex: /.*[a-z].*/ },
        {message: "One uppercase letter required.", regex: /.*[A-Z].*/},
        {message: "8 characters minimum.", regex: /.{8,}/},
        {message: "One number required.", regex: /.*[0-9].*/}
      ],
      form: {
        fname: '',
        lname: '',
        gender: '',
        age: '',
        email: '',

        password: '',
        cpassword: '',

      },
      submitted: false,
      passwordFieldType: 'password',
      errors: []
    }
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    resetPasswords() {
      this.password = ''
      this.cpassword = ''
      this.submitted = true
      setTimeout(() => {
        this.submitted = false
      }, 2000)
    },
    submit() {
      this.errors = [];
      if (!validate.password(this.form.password)) {
        this.errors.push('Please enter a password');
      } else {
        for (let condition of this.rules) {
          if (!condition.regex.test(this.form.password)) {
            this.errors.push(condition.message)
          }
        }
        if (this.form.password !== this.form.cpassword) {
          this.errors.push("Passwords don't match")
        }
      }
      if (!validate.email(this.form.email)) {
        this.errors.push('Please enter a valid email address');
      }


      if (this.errors.length === 0) {
        console.log("in");
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(data => {
              data.user
                  .updateProfile({
                    displayName: this.form.fname
                  })
                  .then(() => {
                    const userUid = data.user.uid; // The UID of the user.
                    const email = data.user.email; // The email of the user.
                    const displayName = data.user.displayName; // The display name of the user.

                    // set account  doc
                    const account = {
                      userid: userUid,
                      email: email,
                      firstName: displayName,
                      lastName: this.form.lname,
                      calendarEvents: []
                    }
                    // write new doc to collection
                    firebase.firestore().collection('accounts').doc(userUid).set(account).then(() => {
                    });
                  });
            })

            .catch(err => {
              console.log(err.message);
            });
      }
    },

  }
}

</script>

<style scoped>
#register {
  padding:50px;
}
.special button {
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

.special button:disabled {
  background: #4a6988;
  color:#ddd
}

.special button:hover:disabled {
  cursor:default;
}

#errors {
  color:#f95e68;
}
</style>