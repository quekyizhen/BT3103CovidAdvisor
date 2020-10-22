<template>
    <div>
        <h1 id="title">Step 1: Track your symptoms</h1>

        <h2 id="list">Symptoms Onset Date:</h2>
        <p class="symps">
        <input type="date" id="date" name="date">
        </p>

        <h2 id="list">List of Symptoms: (Check all applicable)</h2>
        <p class="symps">
        <input type="checkbox" value="Fever" v-model="symptomsSelected">
        <label for="fever">Fever</label> <br>

        <input type="checkbox" value="Cough" v-model="symptomsSelected">
        <label for="cough">Cough</label> <br>

        <input type="checkbox" value="Chills or rigors" v-model="symptomsSelected">
        <label for="chills">Chills or rigors</label> <br>

        <input type="checkbox" value="Sore throat" v-model="symptomsSelected">
        <label for="sore">Sore throat</label> <br>

        <input type="checkbox" value="Shortness of breath" v-model="symptomsSelected">
        <label for="short">Shortness of breath</label> <br>

        <input type="checkbox" value="Runny nose" v-model="symptomsSelected">
        <label for="runny">Runny nose</label> <br>

        <input type="checkbox" value="Headache" v-model="symptomsSelected">
        <label for="headache">Headache</label> <br>

        <input type="checkbox" value="Fatigue" v-model="symptomsSelected">
        <label for="fatigue">Fatigue</label> <br>

        <input type="checkbox" value="Loss of taste/smell" v-model="symptomsSelected">
        <label for="loss">Loss of taste/smell</label> <br>
        </p>
        
        <p class="symps" v-if="symptomsSelected.length !=0"> Symptoms Selected: 
             <ul>
                <li v-for="symps in symptomsSelected" v-bind:key="symps">
                {{symps}}   
                </li>
            </ul>
        </p>

        <h2 id="list">Have you travelled in the past 2 weeks?</h2>
        <p class="symps">
        <input type="radio" id="yes" value="Yes" v-model="travelled">
        <label for="yes">Yes</label> <br>
        <input type="radio" id="no" value="No" v-model="travelled">
        <label for="no">No</label>
        </p>

        <h2 id="list">Have you been in contact with a COVID-19 patient in the past 2 weeks?</h2>
        <p class="symps">
        <input type="radio" id="yes1" value="Yes" v-model="contact">
        <label for="yes1">Yes</label> <br>
        <input type="radio" id="no1" value="No" v-model="contact">
        <label for="no1">No</label>
        </p>

        <h1 id="title">Step 2: Enter your Medical History</h1>

        <h2 id="list">Gender</h2>
        <p class="symps">
        <input type="radio" id="male" value="Male" v-model="gender">
        <label for="male">Male</label> <br>
        <input type="radio" id="female" value="Female" v-model="gender">
        <label for="no">Female</label>
        </p>

        <h2 id="list">Age</h2>
        <p class="symps">
        <input type="radio" id="age1" value="age1" v-model="age">
        <label for="age1">12 and below</label> <br>
        <input type="radio" id="age2" value="age2" v-model="age">
        <label for="age2">12 - 20</label> <br>
        <input type="radio" id="age3" value="age3" v-model="age">
        <label for="age3">21 - 30</label> <br>
        <input type="radio" id="age4" value="age4" v-model="age">
        <label for="age4">21 - 40</label> <br>
        <input type="radio" id="age5" value="age5" v-model="age">
        <label for="age5">41 - 50</label> <br>
        <input type="radio" id="age6" value="age6" v-model="age">
        <label for="age6">51 - 60</label> <br>
        <input type="radio" id="age7" value="age7" v-model="age">
        <label for="age7">61 and above</label> <br>

        </p>

        <h2 id="list">Prevailing Risk Factors: (Check all applicable)</h2>
        <p class="symps">
        <input type="checkbox" value="Cardiac Disease" v-model="riskSelected">
        <label for="Cardiac Disease">Cardiac Disease</label> <br>

        <input type="checkbox" value="Diabetes" v-model="riskSelected">
        <label for="Diabetes">Diabetes</label> <br>

        <input type="checkbox" value="Chronic Lung Disease" v-model="riskSelected">
        <label for="Chronic Lung Disease">Chronic Lung Disease</label> <br>

        <input type="checkbox" value="Liver Disease" v-model="riskSelected">
        <label for="Liver Disease">Liver Disease</label> <br>

        <input type="checkbox" value="Immunosupressed" v-model="riskSelected">
        <label for="Immunosupressed">Immunosupressed</label> <br>

        <input type="checkbox" value="Cancer" v-model="riskSelected">
        <label for="Cancer">Cancer</label> <br>

        <input type="checkbox" value="Obesity" v-model="riskSelected">
        <label for="Obesity">Obesity</label> <br>

        <input type="checkbox" value="Renal Disease" v-model="riskSelected">
        <label for="Renal Disease">Renal Disease</label> <br>
        </p>

        <!--button id="button">Save</button> <button id="button">Submit</button-->
        <!--input type="submit" value="Submit"-->
        <button type="button" class="btn" @click="showModal">Submit </button>

        <modal v-bind:symptomsSelected="symptomsSelected" v-bind:riskSelected="riskSelected" v-bind:contact="contact" v-show="isModalVisible" @close="closeModal"/>

    </div>
</template>


<script>
//import Datepicker from 'vuejs-datepicker'
import ModalWindow from './ModalWindow.vue'

export default {
    components: {
    'modal': ModalWindow
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
#title {
  text-align: center;
  margin-top: 60px;
  margin-left: 60px;
}
#list {
  text-align: left;
  margin-top: 60px;
  margin-left: 60px;
}
p.symps {
  text-align: left;
  margin-left: 60px;
}
#button {
    margin-left: 20px;
    
}

</style>