<template>
  <div class="chart">
    <chart :styles="myStyles"></chart>
  </div>
</template>

<script>
import Chart from "./Line_Breakdown.js";
export default {
  components: {
    Chart,
  },
  computed: {
    myStyles () {
      return {height: '600px', width: '1380px'}
    }
  },
};
</script>

<style></style>
