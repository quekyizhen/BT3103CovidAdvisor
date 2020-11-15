<template>
<div id="fitb">
  <h1>Personal Info:</h1>
  <h4>You may update your personal information here</h4>
  <div>
    <label for="name">First Name:
      <input type="text" v-model="fname" value="fname">
    </label>
    <br><br>

    <label for="name">Last Name:
      <input type="text" v-model="lname" value="lname">
    </label>
    <br><br>

    <label for="name">Gender:
      <select v-model="gender">
        <option disabled value=""></option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </label><br><br>

    <label for="name">Age:
      <input type="number" v-model="age" value="age">
    </label>
    <br><br>

    <label for="name">Email:
      <input type="text" v-model="email" value="email">
    </label> <br><br>
    <br>
  </div>

  <button class="end">Save Changes</button>

  <br><br><br>

  <form novalidate @submit.prevent="newPassword">
  <h1>Change Password:</h1>
    <label for="resetEmail">Email:
      <input type="email" v-model="resetEmail" value="resetEmail" id="resetEmail">
    </label>
    <br><br>
    <button class="end" type="submit">Send reset email</button>
  </form>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Account",
  data() {
    return {
      rules: [
        { message:'One lowercase letter required.', regex:/[a-z]+/ },
        { message:"One uppercase letter required.",  regex:/[A-Z]+/ },
        { message:"8 characters minimum.", regex:/.{8,}/ },
        { message:"One number required.", regex:/[0-9]+/ }
      ],
      fname:'',
      lname:'',
      gender:'',
      age:'',
      email:'',
      passwordFieldType: 'password',
      cpassword:'',
      npassword:'',
      cnpassword:'',
      submitted:false,
      resetEmail:''
    }
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    resetPasswords () {
      this.cpassword = ''
      this.npassword = ''
      this.cnpassword = ''
      this.submitted = true
      setTimeout(() => {
        this.submitted = false
      }, 2000)
    },
    newPassword() {
      firebase
          .auth()
          .sendPasswordResetEmail(this.resetEmail)
          .then(() => {
            alert('Check your registered email to reset the password!')
          }).catch((error) => {
        alert(error)
      })
    }
  },
  computed: {
    notSamePasswords () {
      if (this.passwordsFilled) {
        return (this.npassword !== this.cnpassword)
      } else {
        return false
      }
    },
    passwordsFilled () {
      return (this.cpassword !== '' && this.npassword !== '' && this.cnpassword !== '')
    },
    passwordValidation () {
      let errors = []
      for (let condition of this.rules) {
        if (!condition.regex.test(this.npassword)) {
          errors.push(condition.message)
        }
      }
      if (errors.length === 0) {
        return { valid:true, errors }
      } else {
        return { valid:false, errors }
      }
    }
  }
}
</script>

<style scoped>
input {
    float: right;
    margin-left: 100px;
    width: 250px
}
select {
    float: right;
    clear: both;
    width: 100px
}
.hints {
	max-width:300px;
	padding:1em;
	background:whitesmoke;
	margin: 1.5em 0;
	font-size: .9em;
}
.end {
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
</style>
