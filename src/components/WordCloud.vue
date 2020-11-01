<template>
  <div>
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler">
      </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  components: {
    wordcloud
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [{
          "name": "Fever",
          "value": 40
        },
        {
          "name": "Shortness of Breath",
          "value": 40
        },
        {
          "name": "Cough",
          "value": 30
        },
        {
          "name": "Fatigue",
          "value": 30
        },
        {
          "name": "Sore Throat",
          "value": 20
        },
        {
          "name": "Loss of Taste/Smell",
          "value": 15
        },
        {
          "name": "Runny Nose",
          "value": 15
        },
        {
          "name": "Headache",
          "value": 18
        }, 
        {
          "name": "Chills or Rigors",
          "value": 20
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>