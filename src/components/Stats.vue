<template>
  <div id="stats">
    <h1>SINGAPORE COVID-19 STATISTICS</h1>
    <br>
    <h2>Most Common Symptoms</h2>
    <word-cloud></word-cloud>

    <h2>COVID-19 Cases by Age Groups</h2>
    <div id="age">
    <age-bar></age-bar>
    </div>
    <br><br>
    <h2>Proportion of COVID-19 Cases</h2>
    <div id="doughs">
      <div id="gender">

        <h2>By Gender</h2>
        <div class="doughnuts">
        <doughnut-gender></doughnut-gender>
        </div>
      </div>
      
      <div id="nationality">
        <h2>By Nationality</h2>
        <div class="doughnuts">
        <doughnut-nationality></doughnut-nationality>
        </div>
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
   text-align: center;
 }
 h2 {
   text-align: center;
   color: #0e3964;
 }
 #stats {
   padding:30px;
 }
 #nationality {
   display: inline-block;
   width:50%;

 }
 #gender {
   display: inline-block;
   width:50%;
 }
 .breakdown h2 {
  text-align: center;
 }
#breakdown {
  padding-left: 30px;
 }
 #cumulative {
  padding-left: 30px;
 }

.doughnuts {
  padding: 0 100px 100px;

}

</style>
