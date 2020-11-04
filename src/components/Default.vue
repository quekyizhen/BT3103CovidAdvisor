<template>
  <div id="default">

    <div id="textbox">Welcome to the COVID-19 Advisor, the web application that helps you keep you and your loved ones safe during this pandemic.
    Take the survey to find out how high your risk of having COVID is, and create an account to track your encounters with
      confirmed patients as well as your symptoms. Take the test now — it's fast, free and anonymous.
      <br><br><br>
      <button id="end" style="font-size:18px;font-weight:bold;margin:10px"><router-link to="/symptoms">Start tracking now</router-link></button>
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
  height:300px;
  overflow:auto;
  vertical-align:top;
}
</style>