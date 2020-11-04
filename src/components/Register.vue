<template>
  <div id="register">
    <h1>Personal Information:</h1>
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

    <br><br>

    <h1>Password:</h1>
    <h4>Please follow the requirements to create your password</h4>
    <div class="items">

      <label for="name">Password:
        <input :type="passwordFieldType" v-model="npassword" value="npassword">
      </label> <br><br>

      <label for="name">Confirm Password:
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
        <p>Passwords don't match</p>
      </div>
      <br><br><br>
    </div>
    <div class="special"><button @click='resetPasswords' :disabled="checkPasswords">
      Register
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
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
      this.npassword = ''
      this.cnpassword = ''
      this.submitted = true
      setTimeout(() => {
        this.submitted = false
      }, 2000)
    },
  },
  computed: {
    checkPasswords() {
      if (!this.passwordsFilled || !this.passwordValidation.valid || this.notSamePasswords) {
        return true;
      } else {
        return false;
      }
    },
    notSamePasswords () {
      if (this.passwordsFilled) {
        return (this.npassword !== this.cnpassword)
      } else {
        return false
      }
    },
    passwordsFilled () {
      return (this.npassword !== '' && this.cnpassword !== '');
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
</style>