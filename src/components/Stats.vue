<template>
  <div id="stats">
    <h1>COVID-19 STATISTICS</h1>
    <br>
    <h2>Most Common Symptoms</h2>
    <word-cloud></word-cloud>

    <h2>COVID-19 Cases by Age Groups</h2>
    <div id="age">
    <age-bar></age-bar>
    </div>

    <div>
      <div id="gender">
        <h2>Proportion of COVID-19 Cases by Gender</h2>
        <doughnut-gender></doughnut-gender>
      </div>
      
      <div id="nationality">
        <h2>Proportion of COVID-19 Cases by Nationality</h2>
        <doughnut-nationality></doughnut-nationality>
      </div>
    </div>

    <div id="breakdown">
      <h2>Daily COVID-19 Cases in Singapore</h2>
      <line-breakdown></line-breakdown>
    </div>

    <div id="cumulative">
      <h2>Cumulative Daily COVID-19 Cases in Singapore</h2>
      <line-culmulative></line-culmulative>
    </div>

  </div>

</template>

<script>
import WordCloud from './WordCloud.vue'
import AgeBarChart from './AgeBarChart.vue'
import Doughnut_Gender from './Doughnut_Gender.vue'
import Doughnut_Nationality from './Doughnut_Nationality.vue'
import Line_Breakdown from './Line_Breakdown.vue'
import Line_Culmulative from './Line_Culmulative.vue'

export default {
  name: "Stats",
  components: {
    'word-cloud': WordCloud,
    'age-bar': AgeBarChart,
    'doughnut-gender': Doughnut_Gender,
    'doughnut-nationality': Doughnut_Nationality,
    'line-breakdown': Line_Breakdown,
    'line-culmulative': Line_Culmulative,
    },

}
</script>

<style scoped>

 h1 {
   font-size:35px;
   text-align: center;
   color: #20344a;
 }
 h2 {
   text-align: center;
   color: #0e3964;
 }
 #stats {
   padding:50px;
 }
 #nationality {
   display: inline-block;
   padding-left: 300px;
 }
 #gender {
   display: inline-block; 
   padding-left: 30px;
   padding-top: 120px;
 }
 .breakdown h2 {
  text-align: center;
  padding-top: 120px;
 }
#breakdown {
  padding-top: 120px;
 }
 #cumulative {
  padding-top: 120px;
 }

</style>
