<template>
  <div id="app">
    <symptoms-page></symptoms-page>
  </div>
</template>

<script>
import SymptomsPage from './components/SymptomsPage.vue'

export default {
  name: 'App',
  components: {
    'symptoms-page': SymptomsPage
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
