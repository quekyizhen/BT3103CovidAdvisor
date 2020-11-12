<template>
  <div id="stats">
    <h1>COVID-19 STATISTICS</h1>

    <h3>Word Cloud Common Symptoms</h3>
    <word-cloud></word-cloud>

  </div>

</template>

<script>
import WordCloud from './WordCloud.vue'

export default {
  name: "Stats",
  components: {
    'word-cloud': WordCloud
    },

}
</script>

<style scoped>

 h1 {
   font-size:35px;
   text-align: center;
 }
 h3 {

 }
 #stats {
   padding:50px;
 }

</style>