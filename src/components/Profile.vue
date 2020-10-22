<template>
<div>
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

            <!--label for="name">Gender:
                <input type="text" v-model="gender" value="gender">
            </label>
            <br><br-->

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
            <h4>You may change your password here</h4>
            <div class="items">

            <!-- <password-meter :password="password" /> -->

            <label for="name">Current Password:
                <input type="password" v-model="cpassword" value="cpassword"> 
            </label> <br><br>
            <!-- <button type="password" @click="switchVisibility">show / hide</button>
            <br><br> -->
            <label for="name">New Password:
                <input type="password" v-model="npassword" value="npassword"> 
            </label> <br><br>
            <label for="name">Confirm New Password:
                <input type="password" v-model="cnpassword" value="cnpassword"> 
            </label> <br><br><br>
            </div>
            <button id="end">Change My Password</button>
    </div>
</div>
</template>

<script>
//import passwordMeter from "vue-simple-password-meter";
export default {
    data() {
        return {
            fname:'',
            lname:'',
            gender:'',
            age:'',
            email:'',
            cpassword:'',
            npassword:'',
            cnpassword:'',
            //passwordFieldType: 'password'
        }
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        }
    },
    // components: {
    //     passwordMeter
    // }
}
</script>

<style scoped>
.tab {
  float: left;
  border: 1px solid rgb(32,52,79);
  background-color: rgb(32,52,79);
  width: 20%;
  height: 800px;
}
.tab h1 {
    color: white
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
    float: left;
    padding-left: 50px;
    text-align: left;
    
}
input {
    float: right;
    /* clear: both; */
    margin-left: 100px;
    width: 200px
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
/* label {
    display: inline-block;
    text-align: right;
} */
.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 5px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
}
</style>