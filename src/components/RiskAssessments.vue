<template>
<div>
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
    <!-- <div class="content">
        <h1>Past Risk Assessments:</h1>
        <p>You have no past records</p>
        <br><br>
        <h1>My Symptoms:</h1>
        <p>You have no past records</p>
    </div> -->
    <div id="cal"> 
      <h1>My Calendar</h1>
      <calendar-view
            :show-date="showDate"
            :events="events" 
            :enable-date-selection="true"
            :selection-start="selectionStart"
            :selection-end="selectionEnd"
            
            class="theme-default holiday-us-traditional holiday-us-official">
            <calendar-view-header
                slot="header"
                slot-scope="t"
                :header-props="t.headerProps"
                @input="setShowDate" />
        </calendar-view>

        <div class="field">
					<label class="label">Title</label>
					<div class="control">
						<input v-model="newItemTitle" class="input" type="text" />
					</div>
				</div>

				<div class="field">
					<label class="label">Start date</label>
					<div class="control">
						<input v-model="newItemStartDate" class="input" type="date" />
					</div>
				</div>

				<div class="field">
					<label class="label">End date</label>
					<div class="control">
						<input v-model="newItemEndDate" class="input" type="date" />
					</div>
				</div>
        <button class="button is-info" @click="clickTestAddItem">
					Add Item
				</button>
        
    </div>
 </div>
</template>

<script>
// import CalendarView from "vue-simple-calendar"
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"

export default {
  name:'cal',
  data: function() {
      return { 
        //showDate: new Date(),
        showDate: new Date('10/15/2020'),
        events: [
          {
            id: 'e1',
            startDate: '2020-10-19',
            endDate: '2020-10-19',
            title: 'Sample event 1'
          },
          {
            id: 'e2',
            startDate: '2020-10-06',
            endDate: '2020-10-13',
            title: 'Sample event 2'
          }
        ]
      }
    },
    components: {
      'calendar-view':CalendarView,
      CalendarViewHeader
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
      },
      clickTestAddItem() {
			this.events.push({
				startDate: this.newItemStartDate,
				endDate: this.newItemEndDate,
				title: this.newItemTitle,
				id: "e" + Math.random().toString(36).substr(2, 10),
			})
			this.message = "You added a calendar item!"
		}
    }
}
</script>

<style scoped>
/* #container {
  vertical-align: top;
} */
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

</style>
