<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Risk Assessment Result
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
          <p v-if="symptomsSelected.length <=2 && contact=='Yes'">
            It is probable that you may be infected with COVID-19. Please seek professional advice from a doctor! 
            Click <a href="https://flu.gowhere.gov.sg/ ">here</a> to view clinics near you. 
            <iframe width="600" height="400" src="https://data.gov.sg/dataset/chas-clinics/resource/21dace06-c4d1-4128-9424-aba7668050dc/view/5cbf5325-26d2-4e3b-a54d-e20d6d07dcd2" frameBorder="0"> </iframe>
          </p>
          <p v-else-if="symptomsSelected.length <=2 && contact=='No' || symptomsSelected.length <=2 ">
            Your inputs do not suggest that you may have COVID-19. <br>
            Please continue to self-monitor for any new symptoms and revisit this website to log in your symptoms should any develop.
          </p>
          <p v-else-if=" (symptomsSelected.length >=3 && symptomsSelected.length <=6) && contact=='Yes'">
            It is highly probable that you may be infected with COVID-19. Please go to the Emergency Department at the hospital immediately! 
          </p>
          <p v-else-if=" (symptomsSelected.length >=3 && symptomsSelected.length <=6) && contact=='No' || (symptomsSelected.length >=3 && symptomsSelected.length <=6)">
            It is probable that you may be infected with COVID-19. Please seek professional advice from a doctor! 
            Click <a href="https://flu.gowhere.gov.sg/ ">here</a> to view clinics near you. 
            <iframe width="600" height="400" src="https://data.gov.sg/dataset/chas-clinics/resource/21dace06-c4d1-4128-9424-aba7668050dc/view/5cbf5325-26d2-4e3b-a54d-e20d6d07dcd2" frameBorder="0"> </iframe>
          </p>
          <p v-else-if="symptomsSelected.length >= 7 && contact =='Yes' || symptomsSelected.length >= 7">
            It is highly probable that you may be infected with COVID-19. Please go to the Emergency Department at the hospital immediately! 
          </p>
        </slot>
       </section>

       <footer class="modal-footer">
          <slot name="footer">

            <button type="button" class="btn-red" @click="close">
              Close 
          </button>
        </slot>
      </footer>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props:{
      symptomsSelected:{ //passed from SymptomsPage.vue
        type:Array
      }, 
      riskSelected: { //passed from SymptomsPage.vue
        type:Array
      },
      contact: { //passed from SymptomsPage.vue
        type:String
      },
      age: { //passed from SymptomsPage.vue
        type:String
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    }
  }
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
    display: flex;
  }

  .modal-header {
    color: #DC143C;
    justify-content: space-between;
  }

  .modal-footer {
    
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #535e5b;
    background: transparent;
  }

  .btn-red {
    color: white;
    background: #DC143C;
    border: 1px solid #DC143C;
    border-radius: 2px;
  }
</style>