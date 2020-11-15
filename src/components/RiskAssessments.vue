<template>
<div>
  <div onload="addSymptomsEvent" id="cal">
    <h1>My Calendar</h1>
    <button id="end" @click="addSymptomsEvent()">Show Risk Assessments</button><br><br>
    <calendar-view
        :show-date="showDate"
        :items="riskAssessments"
        
        @click-item="onClickEvent(calendarItem, windowEvent)"
    >
      <calendar-view-header
          slot="header"
          slot-scope="t"
          :header-props="t.headerProps"
          @input="setShowDate"
      />
    </calendar-view>

  </div>
  <div id="buffer"></div>
  <div id="risk">
    <div v-if="isHidden == false">
      <h2>Your symptoms recorded:</h2>
      <ul v-for="event in this.events" v-bind:key="event.date">
        {{event.date}}
        <li v-for="symps in event.symptomsSelected" v-bind:key="symps">
          {{symps}}
        </li> 
      </ul>
    </div>
  </div>

  <h2>Clear past risk assessments</h2>
  <h4>By clicking the button below all your past risk assessments will be permanently deleted</h4>
  <button id="end" @click="clearAssessments">Clear Risk Assessments</button>
</div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
 import firebase from 'firebase'
// import CalendarView from './CalendarView.vue'
//import CalendarViewHeader from './CalendarViewHeader.vue'

export default {
  name: "RiskAssessments",
  components: {
		CalendarView,
		CalendarViewHeader,
  },
  props:["signedIn",],
  data: function () {
		return {
      showDate: new Date(),
      isHidden: true,
      riskAssessments: [],
      items: Array(this.riskAssessments).fill(),
      events: [],
		}
	},
	methods: {
		setShowDate(d) {
			this.showDate = d
    },
    clearAssessments() {
      this.riskAssessments = [];
      document.getElementById("risk").innerHTML = "";
    },
    onClickEvent() {
      this.isHidden = !this.isHidden;
    },
    
    getEvents() {
      /*
      firebase.firestore().collection('accounts').doc(firebase.auth().currentUser.uid).get().then(
        function(doc) {
            if (doc.exists) {
              var data = doc.data();
              this.events.push(data.calendarEvents);
          
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error)
              }
            )*/
      firebase.firestore().collection('accounts').doc(firebase.auth().currentUser.uid).get().then(
        data => {
          this.events = data.data().calendarEvents;
        }
      )
    },

    addSymptomsEvent() {
      this.getEvents();
      var arrayLength = this.events.length;
      for (var i = 0; i < arrayLength; i++) {
          var num = i+1;
          var dict = {};
          dict['id'] = String(num);
          dict['title'] = 'Risk Assessment ' + num;
          dict['startDate'] = this.events[i].date;
          dict['endDate'] = this.events[i].date;
          this.riskAssessments.push(dict);
      }

    },
  }
}

</script>

<style scoped>
#cal {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 60vh;
  width:calc(100% - 380px);
    display: inline-block;
    text-align: left;
    vertical-align: top;
  position:absolute;
  z-index:0;

		/* margin-left: auto;
		margin-right: auto; */
}
#end {
    background-color: rgb(32,52,79);
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 8px 4px;
    cursor: pointer;
    border-radius: 8px;
}

#buffer {
  width:100%;
  height:80vh;
}

</style>
