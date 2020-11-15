<template>
    <div id="symptoms">

        <h1 class="title">Step 2: Enter your Medical History</h1>

        <h2 class="list">Gender</h2>
        <p class="symps">
            <label class="container2">Male
                <input type="radio" checked="checked" id="male" value="Male" v-model="gender">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">Female
                <input type="radio" checked="checked" id="female" value="Female" v-model="gender">
                <span class="checkmark2"></span>
            </label>
        </p><br><br>

        <h2 class="list">Age</h2>
        <p class="symps">
            <label class="container2">12 and below
                <input type="radio" checked="checked" id="age1" value="age1" v-model="age">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">13 - 20
                <input type="radio" checked="checked" id="age2" value="age2" v-model="age">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">21 - 30
                <input type="radio" checked="checked" id="age3" value="age3" v-model="age">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">31 - 40
                <input type="radio" checked="checked" id="age4" value="age4" v-model="age">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">41 - 50
                <input type="radio" checked="checked" id="age5" value="age5" v-model="age">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">51 - 60
                <input type="radio" checked="checked" id="age6" value="age6" v-model="age">
                <span class="checkmark2"></span>
            </label>
            <label class="container2">61 and above
                <input type="radio" checked="checked" id="age7" value="age7" v-model="age">
                <span class="checkmark2"></span>
            </label>
        </p><br><br>

        <h2 class="list">Prevailing Risk Factors: (Check all applicable)</h2>
        <div class="symps">
            <label class="container">Cardiac Disease
                <input type="checkbox" checked="checked" value="Cardiac Disease" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Diabetes
                <input type="checkbox" checked="checked" value="Diabetes" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Chronic Lung Disease
                <input type="checkbox" checked="checked" value="Chronic Lung Disease" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Liver Disease
                <input type="checkbox" checked="checked" value="Liver Disease" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Cardiac Disease
                <input type="checkbox" checked="checked" value="Cardiac Disease" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Immunosupressed
                <input type="checkbox" checked="checked" value="Immunosupressed" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Cancer
                <input type="checkbox" checked="checked" value="Cancer" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Obesity
                <input type="checkbox" checked="checked" value="Obesity" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
            <label class="container">Renal Disease
                <input type="checkbox" checked="checked" value="Renal Disease" v-model="riskSelected">
                <span class="checkmark"></span>
            </label>
        </div>

        <p class="symps" v-if="riskSelected.length !=0"> Risk Factor(s) Selected: 
             <ul>
                <li v-for="risk in riskSelected" v-bind:key="risk">
                {{risk}}   
                </li>
            </ul>
        </p>

        <div class="wrapper">
            <router-link style="text-decoration: none;" to="/symptoms1">
                <button type="button">Back</button> 
            </router-link>
            <button type="button" @click="showModal" style="margin-left:50px;">Submit </button>
            <modal v-bind:symptomsSelected="symptomsSelected" v-bind:riskSelected="riskSelected" v-bind:contact="contact" v-bind:age="age" v-show="isModalVisible" @close="closeModal"/>
        </div>

    </div>
</template>

<script>
//import Datepicker from 'vuejs-datepicker'
import ModalWindow from './ModalWindow.vue'
//import WordCloud from './WordCloud.vue'

export default {
    components: {
    'modal': ModalWindow,
    },
    data() {
        return {
            symptomsSelected: [],
            value:'',
            travelled:'',
            contact:'', 
            gender:'',
            age:'',
            riskSelected: [],
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
        this.isModalVisible = true;
        },
        closeModal() {
        this.isModalVisible = false;
        }
    },
}
</script>

<style scoped>
#symptoms {
  padding:60px;
}
.title {
  text-align: center;
}

.list {
  text-align: left;
}
.symps {
  text-align: left;
}

.wrapper {
    text-align: center;
}

button {
    text-align: center;
    width: 80px;
    height: 30px;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* The container */
.container2 {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container2 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark2 {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container2:hover input ~ .checkmark2 {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container2 input:checked ~ .checkmark2 {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark2:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container2 input:checked ~ .checkmark2:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container2 .checkmark2:after {
  top: 7px;
	left: 7px;
	width: 7px;
	height: 7px;
	border-radius: 60%;
	background: white;
}

.block {
    text-align: left;
    display: inline-block;
    padding: 60px;
}
</style>