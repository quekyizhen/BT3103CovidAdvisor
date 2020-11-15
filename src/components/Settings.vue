<template>
<div id="fitb">
        <h1>Preferences:</h1>

<<<<<<< refs/remotes/eram576/master
        <label for="name">Language:
         <select v-model="selected" id="languages">
=======
        <label for="languages">Language:
        <select v-model="languages" id="languages">
>>>>>>> First draft of app complete.
            <option disabled value=""></option>
            <option>English</option>
            <option>Chinese</option>
            <option>Malay</option>
            <option>Tamil</option>
        </select>
        <br><br><br>
        <button class="end">Save Changes</button>
        </label><br><br><br>

        <h1>Delete Account:</h1>
        <p>WARNING! Your account will be permanently deleted!</p>
        <br>
        
        <button class="end" @click="deleteAcc">Delete My Account</button>

    </div>
</template>

<script>
import firebase from 'firebase'
export default {
data: function () {
		return {
    selected: 'English',
    }
  },
    methods: {
      deleteAcc: function () {
        firebase.firestore().collection('accounts').doc(firebase.auth().currentUser.uid).delete();
        firebase.auth().currentUser.delete();

        this.$router.push("/");
        this.$router.go(0);
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
