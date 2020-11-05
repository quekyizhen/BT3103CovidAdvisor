<template>
<div>
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

  <button id="end">Save Changes</button>

  <br><br><br>

  <h1>Change Password:</h1>
  <h4>Please follow the requirements to change your password</h4>
  <div class="items">

    <label for="name">Current Password:
      <input :type="passwordFieldType" v-model="cpassword" value="cpassword">
    </label> <br><br>

    <label for="name">New Password:
      <input :type="passwordFieldType" v-model="npassword" value="npassword">
    </label> <br><br>

    <label for="name">Confirm New Password:
      <input :type="passwordFieldType" v-model.lazy="cnpassword" value="cnpassword">
    </label> <br><br>

    <button type="password" @click="switchVisibility">show / hide password</button>
    <br><br>

    <transition name="hint" appear>
      <div v-if='passwordValidation.errors.length > 0 && !submitted' class='hints'>
        <h2>Requirements</h2>
        <p v-for='error in passwordValidation.errors' v-bind:key="error">{{error}}</p>
      </div>
    </transition>
    <div class="matches" v-if='notSamePasswords'>
      <p>New passwords don't match</p>
    </div>
    <br><br><br>
  </div>

  <button id="end" @click='resetPasswords' v-if='passwordsFilled && !notSamePasswords && passwordValidation.valid'>
    Change My Password
  </button>
</div>
</template>

<script>
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
      submitted:false
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
</style>
