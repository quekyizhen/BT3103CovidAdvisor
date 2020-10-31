<template>
<div id="container">
    <div class="tab">
        <h1>My Profile</h1> <br>

        <router-link style="text-decoration: none;" to="/profile">
        <button>Profile Info</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/profile/risk">
        <button>Risk Assessments</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/profile/settings">
        <button>Settings</button>
        </router-link>

        <button @click="$emit('toggleSignOut')">Sign Out</button>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {

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
