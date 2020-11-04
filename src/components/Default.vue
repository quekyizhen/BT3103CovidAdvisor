<template>
  <div id="default">

    <div id="textbox">
    <h1 id="start">Welcome to COVID-19 Symptoms Advisor</h1>

    <p id="middle">
      Take our risk assessment to find out your risk of having COVID-19, view latest statistics and monitor locations visited by COVID-19 patients, all on one platform.<br><br>
      Register an account to keep track of your symptoms and more or simply take the assessment now — it's fast, free and anonymous.
    <br><br><br>
    Simply follow the steps below to take the assessment:
    <p id="pointers"> 
      1. Enter your symptoms information<br><br>
      2. Enter your brief medical history<br><br>
      3. Done! Your assessment results will reveal the likelihood of contracting COVID-19 and advice you on the next steps
    </p>
      <br><br>

      <button id="end" style="font-size:18px;font-weight:bold;margin:10px"><router-link to="/symptoms">Start assessment now</router-link></button>
    </div>

    <div id="twitter">
      <Timeline id="WHO" sourceType="profile" style="width:350px;" :options="{ tweetLimit: '10' }"/>
    </div>

  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'


export default {
  name: "Default",
components: {
     Timeline
}
}
</script>

<style scoped>
#default {
  padding:50px;
}

#start {
  font-size: 40px;
}
#middle {
  font-size: 25px;
}
#pointers {
  margin-left:35px;
}
#textbox {
  display:inline-block;
  width:calc(100% - 450px);
  vertical-align:top;
  text-align:justify;
  margin:30px;
  font-size: 20px;
}

#twitter {
  width:350px;
  padding:20px;
  display:inline-block;
  height:425px;
  overflow:auto;
  vertical-align:top;
}
</style>
