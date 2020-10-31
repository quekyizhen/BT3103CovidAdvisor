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
</template>

<script>
export default {
  name: "Account",
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
  }
}
</script>

<style scoped>

</style>