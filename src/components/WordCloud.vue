<template>
  <div>
  <div id="cloud">

      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler"
      :font="Arial"
      :rotate="{from: 0, to: 0}"
      :margin="{top: 15, right: 100, bottom: 15, left: 100}"
      :spiral="rectangular"
      :fontSize=[20,70]
      >
      </wordcloud>
  </div>
  <div id="buffer"></div>
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
          "value": 50
        },
        {
          "name": "Shortness of Breath",
          "value": 50
        },
        {
          "name": "Cough",
          "value": 40
        },
        {
          "name": "Fatigue",
          "value": 40
        },
        {
          "name": "Sore Throat",
          "value": 30
        },
        {
          "name": "Loss of Taste/Smell",
          "value": 27
        },
        {
          "name": "Runny Nose",
          "value": 28
        },
        {
          "name": "Headache",
          "value": 29
        }, 
        {
          "name": "Chills or Rigors",
          "value": 30
        }
      ]
    }
  }
}
</script>

<style scoped>
#cloud {
  width:100%;
  height:auto;
  overflow:hidden;
  z-index:-999;
  left:0;
}
#buffer {
  width:100%;
}
</style>
