<template>
  <div class="myChart">
    <chart :styles="myStyles"></chart>
  </div>
</template>

<script>
import Chart from "./Line_Culmulative.js";
export default {
  components: {
    Chart,
  },
  computed: {
    myStyles () {
      return {height: '550px', width: '100%'}
    }
  },
};
</script>

<style></style>
