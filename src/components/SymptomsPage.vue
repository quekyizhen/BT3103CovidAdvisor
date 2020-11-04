<template>
    <div id="symptoms">

        <h1 class="title">Step 1: Track your symptoms</h1>

        <h2 class="list">Symptoms Onset Date:</h2>
        <p class="symps">
        <input type="date" id="date" name="date">
        </p>

        <h2 class="list">List of Symptoms: (Check all applicable)</h2>
        

            <div class="container"> 
        <img src="@/assets/fever.jpg" width="300" height="200" alt="Fever Image"><br>
        <input type="checkbox" value="Fever" v-model="symptomsSelected">
        <label for="fever">Fever</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/cough.jpg" width="300" height="200" alt="Cough Image"><br>
        <input type="checkbox" value="Cough" v-model="symptomsSelected">
        <label for="cough">Cough</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/chills.jpg" width="300" height="200" alt="Chills Image"><br>
        <input type="checkbox" value="Chills or rigors" v-model="symptomsSelected">
        <label for="chills">Chills or rigors</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/sorethroat.jpg" width="300" height="200" alt="Sore Throat Image"><br>
        <input type="checkbox" value="Sore throat" v-model="symptomsSelected">
        <label for="sore">Sore throat</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/breath.jpg" width="300" height="200" alt="Shortness of Breath Image"><br>
        <input type="checkbox" value="Shortness of breath" v-model="symptomsSelected">
        <label for="short">Shortness of breath</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/runnynose.jpg" width="300" height="200" alt="Runny Nose Image"><br>
        <input type="checkbox" value="Runny nose" v-model="symptomsSelected">
        <label for="runny">Runny nose</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/headache.jpg" width="300" height="200" alt="Headache Image"><br>
        <input type="checkbox" value="Headache" v-model="symptomsSelected">
        <label for="headache">Headache</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/fatigue.jpg" width="300" height="200" alt="Fatigue Image"><br>
        <input type="checkbox" value="Fatigue" v-model="symptomsSelected">
        <label for="fatigue">Fatigue</label> <br><br>
            </div>

            <div class="container"> 
        <img src="@/assets/lossoftaste.jpg" width="300" height="200" alt="Loss of Taste/Smell Image"><br>
        <input type="checkbox" value="Loss of taste/smell" v-model="symptomsSelected">
        <label for="loss">Loss of taste/smell</label> <br><br>
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
        <input type="radio" id="yes" value="Yes" v-model="travelled">
        <label for="yes">Yes</label> <br>
        <input type="radio" id="no" value="No" v-model="travelled">
        <label for="no">No</label>
        </p>

        <h2 class="list">Have you been in contact with a COVID-19 patient in the past 2 weeks?</h2>
        <p class="symps">
        <input type="radio" id="yes1" value="Yes" v-model="contact">
        <label for="yes1">Yes</label> <br>
        <input type="radio" id="no1" value="No" v-model="contact">
        <label for="no1">No</label>
        </p>

        <div class="wrapper">
            <router-link style="text-decoration: none;" to="/symptoms2">
                <button type="button">Next</button>
            </router-link>
        </div>

    </div>
</template>

<script>
//import Datepicker from 'vuejs-datepicker'
//import ModalWindow from './ModalWindow.vue'

export default {
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

.container {
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
}

.wrapper {
    text-align: center;
}

</style>