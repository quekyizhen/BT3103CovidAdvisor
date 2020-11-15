<template>
    <div id="symptoms">

        <h1 class="title">Step 1: Track Your Symptoms</h1>

        <h2 class="list">Symptoms Onset Date:</h2>
        <p class="symps">
        <input type="date" id="date" name="date" v-model="date">
        </p>

        <h2 class="list">List of Symptoms: (Check all applicable)</h2>

            <div class="block"> 
                <img src="@/assets/fever.jpg" width="300" height="200" alt="Fever Image"><br>
                    <label class="container">Fever
                        <input type="checkbox" checked="checked" value="Fever" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

             <div class="block"> 
                <img src="@/assets/cough.jpg" width="300" height="200" alt="Cough Image"><br>
                    <label class="container">Cough
                        <input type="checkbox" checked="checked" value="Cough" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/chills.jpg" width="300" height="200" alt="Chills Image"><br>
                    <label class="container">Chills or rigors
                        <input type="checkbox" checked="checked" value="Chills" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/sorethroat.jpg" width="300" height="200" alt="Sore Throat Image"><br>
                    <label class="container">Sore throat
                        <input type="checkbox" checked="checked" value="Sore throat" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/breath.jpg" width="300" height="200" alt="Shortness of Breath Image"><br>
                    <label class="container">Shortness of breath
                        <input type="checkbox" checked="checked" value="Shortness of breath" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/runnynose.jpg" width="300" height="200" alt="Runny nose Image"><br>
                    <label class="container">Runny nose
                        <input type="checkbox" checked="checked" value="Runny nose" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/headache.jpg" width="300" height="200" alt="Headache Image"><br>
                    <label class="container">Headache
                        <input type="checkbox" checked="checked" value="Headache" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/fatigue.jpg" width="300" height="200" alt="Fatigue Image"><br>
                    <label class="container">Fatigue
                        <input type="checkbox" checked="checked" value="Fatigue" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>

            <div class="block"> 
                <img src="@/assets/lossoftaste.jpg" width="300" height="200" alt="Loss of Taste/Smell Image"><br>
                    <label class="container">Loss of taste or smell
                        <input type="checkbox" checked="checked" value="Loss of taste/smell" v-model="symptomsSelected">
                        <span class="checkmark"></span>
                    </label>
            </div>
      
        <p class="symps" v-if="symptomsSelected.length !=0"> Symptom(s) Selected: 
             <ul>
                <li v-for="symps in symptomsSelected" v-bind:key="symps">
                {{symps}}   
                </li>
            </ul>
        </p>

        <h2 class="list">Have you travelled in the past 2 weeks?</h2>
        <p class="symps">

        <label class="container2" >Yes
            <input type="radio" name="radio" checked="checked" id="yes" value="Yes" v-model="travelled">
            <span class="checkmark2"></span>
        </label>

        <label class="container2">No
            <input type="radio" name="radio" checked="checked" id="no" value="No" v-model="travelled">
            <span class="checkmark2"></span>
        </label>

        </p>

        <h2 class="list">Have you been in contact with a COVID-19 patient in the past 2 weeks?</h2>
        <p class="symps">
          <label class="container2">Yes
            <input type="radio" name="radio2" checked="checked" id="yes1" value="Yes" v-model="contact">
            <span class="checkmark2"></span>
        </label>

        <label class="container2">No
            <input type="radio" name="radio2" id="no1" value="No" v-model="contact">
            <span class="checkmark2"></span>
        </label>
        </p>

        <div class="wrapper">
            <button type="button" @click="showModal">Submit </button>
            <modal v-bind:symptomsSelected="symptomsSelected" v-bind:riskSelected="riskSelected" v-bind:contact="contact" v-bind:age="age" v-show="isModalVisible" @close="closeModal"/>
        </div>


    </div>
</template>

<script>
//import Datepicker from 'vuejs-datepicker'
import ModalWindow from './ModalWindow.vue'

export default {
    components: {
      'modal': ModalWindow,
    },

    props:{
      signedIn:{ //passed from App.vue
        type:Boolean
      }
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
            date:'',
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
  padding-top:30px;
  padding-left: 80px;
  padding-bottom: 50px;
}
.title {
  text-align: center;
}

.block {
    text-align: left;
    display: inline-block;
    padding: 60px;
}
.list {
  text-align: left;
  margin-top: 60px;
}
p.symps {
  text-align: left;
  font-size: 18px;
}

.wrapper {
    text-align: center;
}

#box {
  max-width:300px;
	padding:1em;
	background:whitesmoke;
}

button {
    text-align: center;
    width: 80px;
    height: 30px;
    font-weight: bold;
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

</style>