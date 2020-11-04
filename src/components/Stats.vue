<template>
  <div>
    <h1>This is the statistics page.</h1>

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

</style>