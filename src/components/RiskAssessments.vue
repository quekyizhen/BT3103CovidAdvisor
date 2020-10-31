<template>
<div id="container">
    <div class="tab">
        <h1>My Profile</h1> <br>

        <router-link style="text-decoration: none;" to="/">
        <button>Profile Info</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/risk">
        <button>Risk Assessments</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/settings">
        <button>Settings</button>
        </router-link>

        <button>Sign Out</button>
    </div>
    
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

      <div id="risk">
        <h2 v-if="isHidden == false">Your symptoms recorded on this day were:</h2>
      </div><br>

      <h2>Clear past risk assessments</h2>
      <h4>By clicking the button below all your past risk assessments will be permanently deleted</h4>
      <button id="end" @click="clearAssessments">Clear Risk Assessments</button>
 
    </div>
 </div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
// import CalendarView from './CalendarView.vue'
// import CalendarViewHeader from './CalendarViewHeader.vue'

export default {
  name: "CalendarDemoApp",
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
#container {
  vertical-align: top;
}
.tab {
  display: inline-block;
  border: 1px solid rgb(32,52,79);
  background-color: rgb(32,52,79);
  width: 20%;
  height: 1000px;
  margin-right: 30px;
  vertical-align: top;
  padding-bottom: 20px;
}
.tab h1 {
    color: white;
    margin: 35px
}
.tab button {
  display: block;
  background-color: inherit;
  color: white;
  padding: 15px;
  padding-left: 30px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size:18px
}
.tab button:hover {
  background-color:rgb(117, 155, 204);
}
.tab button:focus {
  background-color: rgb(117, 155, 204);
}
.tab button:active {
  background-color: rgb(117, 155, 204);
}

.content {
  display: inline-block;
  text-align: left;
  vertical-align: top;
  padding: 20px;
    /* float: left;
    padding-left: 50px;
    text-align: left; */
    
}
#cal {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
    display: inline-block;
    text-align: left;
    vertical-align: top;
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

</style>
