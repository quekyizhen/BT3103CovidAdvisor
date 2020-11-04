<template>
    <div id="symptoms">

        <h1 class="title">Step 2: Enter your Medical History</h1>

        <h2 class="list">Gender</h2>
        <p class="symps">
        <input type="radio" id="male" value="Male" v-model="gender">
        <label for="male">Male</label> <br>
        <input type="radio" id="female" value="Female" v-model="gender">
        <label for="no">Female</label>
        </p>

        <h2 class="list">Age</h2>
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

        <h2 class="list">Prevailing Risk Factors: (Check all applicable)</h2>
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

        <p class="symps" v-if="riskSelected.length !=0"> Risk Factor(s) Selected: 
             <ul>
                <li v-for="risk in riskSelected" v-bind:key="risk">
                {{risk}}   
                </li>
            </ul>
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

.container {
    text-align: left;
    display: inline-block;
    padding: 40px;
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