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
        <h1>Past Risk Assessments:</h1>
        <p>You have no past records</p>
        <br><br>
        <h1>My Symptoms:</h1>
        <p>You have no past records</p>
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
/* .tab button:hover {
  background-color:rgb(117, 155, 204);
} */
.tab button:focus {
  background-color: rgb(117, 155, 204);
}
/* .tab button:active {
  background-color: rgb(117, 155, 204);
} */
.content {
    overflow: hidden;
    float: left;
    padding-left: 50px;
    text-align: left;

}

</style>