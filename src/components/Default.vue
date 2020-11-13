<template>
  <div id="default">

    <div id="textbox">
    <h1 id="start">Welcome to the COVID-19 Symptoms Advisor</h1>

    <p id="middle">
      Take our risk assessment to find out your risk of having COVID-19, view latest statistics and monitor locations visited by COVID-19 patients, all on one platform.<br><br>
      Register an account to keep track of your symptoms and more or simply take the assessment now — it's fast, free and anonymous.
    </p>
      <br><br><br>
    Simply follow the steps below to take the assessment:
    <ol>
      <li>Enter your symptoms information</li>
      <li>Enter your brief medical history </li>
      <li>Done! Your assessment results will reveal the likelihood of contracting COVID-19 and advice you on the next steps</li>
    </ol>

      <br><br>

      <button id="end" style="font-size:18px;font-weight:bold;margin:10px"><router-link to="/symptoms1">Start assessment now</router-link></button>
    </div>

    <div id="wrapper">
      <h1 id="title">Stay updated with the latest tweets from WHO:</h1>
    <div id="twitter">

      <Timeline id="WHO" sourceType="profile" style="width:350px;" :options="{ tweetLimit: '10' }"/>
    </div>
      <h1 id="title2">For more information and latest updates visit the links below:</h1>
      <a class="news" href="https://www.channelnewsasia.com/news/topics/coronavirus-covid-19">
      <img border="0" src="@/assets/cnn.jpg" width="105" height="55">
      </a>
      <a class="news" href="https://www.moh.gov.sg/covid-19">
      <img border="0" src="@/assets/moh.jpg" width="105" height="55">
      </a>
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
  font-size: 30px;
}
#middle {
  font-size: 20px;
}
ol {
  font-size:18px;
  line-height:30px;
}
#textbox {
  display:inline-block;
  width:calc(100% - 500px);
  vertical-align:top;
  text-align:justify;
  margin: 30px 100px 30px 30px;
  font-size: 20px;
}

/* #twitter {
  width:350px;
  padding:20px;
  display:inline-block;
  height:425px;
  overflow:auto;
  vertical-align:top;
} */
/* #title {
  width:350px;
  padding:10px;
} */
/* #news {
  margin-left: 20px;
} */
#wrapper {
  width:350px;
  display:inline-block;
  height:500px;
}
#twitter {
  width:350px;
  height:425px;
  overflow:auto;
  right: 35px;
  top: 750px
}
#title {
  position: sticky;
  top:0;
  width:350px;
  background:white;
}
#title2 {

}

.news {
padding: 20px;
}
#news2 {

}
</style>

