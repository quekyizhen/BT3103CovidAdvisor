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
        <h1>Preferences:</h1>

        <label for="name">Language:
        <select v-model="languages">
            <option disabled value=""></option>
            <option>English</option>
            <option>Chinese</option>
            <option>Malay</option>
            <option>Tamil</option>
        </select>
        </label><br><br><br>

        <h1>Delete Account:</h1>
        <button id="delete">Delete My Account</button>
        <br><br><br>
        <button id="end">Save Changes</button>
    </div>
</div>
</template>

<script>
export default {
    
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
  background-color: rgb(117, 155, 204);
}
.tab button:active {
  background-color: rgb(117, 155, 204);
}
.tab button:focus {
  background-color: rgb(117, 155, 204);
}
.content {
    float: left;
    padding-left: 50px;
    text-align: left;

}
select {
    float: right;
    clear: both;
    width: 120px
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
</style>