<template>
<div id="container">
    <div class="tab">
        <h1>My Profile</h1> <br>

        <router-link style="text-decoration: none;" to="/">
        <button>Profile Info</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/risk">
        <button>Risk Assessments</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/settings">
        <button>Settings</button>
        </router-link>

        <button>Sign Out</button>
    </div>
    <div class="content">
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
              <p>Passwords don't match</p>
            </div>
            <br><br><br>
            </div>

            <button id="end" @click='resetPasswords' v-if='passwordsFilled && !notSamePasswords && passwordValidation.valid'>
              Change My Password
            </button>
    </div>
</div>
</template>

<script>
export default {
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
#container {
  vertical-align: top;
}
.tab {
  display: inline-block;
  border: 1px solid rgb(32,52,79);
  background-color: rgb(32,52,79);
  width: 20%;
  height: 1000px;
  margin-right: 30px;
  vertical-align: top;
  padding-bottom: 20px;
}
.tab h1 {
    color: white;
    margin: 35px
}
.tab button {
  display: block;
  background-color: inherit;
  color: white;
  padding: 15px;
  padding-left: 30px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size:18px
}
.tab button:hover {
  background-color:rgb(117, 155, 204);
}
.tab button:focus {
  background-color: rgb(117, 155, 204);
}
.tab button:active {
  background-color: rgb(117, 155, 204);
}

.content {
  display: inline-block;
  text-align: left;
  vertical-align: top;
  padding: 20px;
    /* float: left;
    padding-left: 50px;
    text-align: left; */
    
}
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

#end {
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
.matches p {
  font-size: 1.1em;
  text-align: center;
  background:whitesmoke;

}
.hints {
	max-width:300px;
	padding:1em;
	background:whitesmoke;
	margin: 1.5em 0;
	font-size: .9em;
}
.hints p {
	margin: 0;
	padding-left: 1em;
}
/* label {
    display: inline-block;
    text-align: right;
} */
</style>
