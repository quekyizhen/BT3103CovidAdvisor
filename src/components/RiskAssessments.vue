<template>
<div id="container">
  <div id="cal">
    <h1>My Calendar</h1>
    <calendar-view
        :show-date="showDate"
        :items="risks"
        :display-period-uom="month"
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
    <h2 v-if="isHidden == false">Your symptoms recorded on this day were:</h2>
  </div>

  <h2>Clear past risk assessments</h2>
  <h4>By clicking the button below all your past risk assessments will be permanently deleted</h4>
  <button id="end" @click="clearAssessments">Clear Risk Assessments</button>
</div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
// import CalendarView from './CalendarView.vue'
//import CalendarViewHeader from './CalendarViewHeader.vue'

export default {
  name: "RiskAssessments",
  components: {
		CalendarView,
		CalendarViewHeader,
	},
  data: function () {
		return {
      showDate: new Date(),
      isHidden: true,
      risks:[
          {
            id: 'e1',
            title: 'Sample event 1',
            startDate: '2020-10-19',
            endDate: '2020-10-19',
          }, 
          {
            id: 'e2',
            title: 'Sample event 2',
            startDate: '2020-10-06',
            endDate: '2020-10-13',
          },
          {
            id: 'e3',
            title: 'Sample event 3',
            startDate: '2020-10-21',
            endDate: '2020-10-22'
          },
          {
            id: 'e4',
            title: 'Sample event 4',
            startDate: '2020-11-21',
            endDate: '2020-11-22'
          }
          ],
      items: Array(this.risks).fill()
		}
	},
	methods: {
		setShowDate(d) {
			this.showDate = d
    },
    clearAssessments() {
      this.risks = []
    },
    onClickEvent() {
      this.isHidden = !this.isHidden
    }
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
  z-index:-999;

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
  height:70vh;
}

</style>
