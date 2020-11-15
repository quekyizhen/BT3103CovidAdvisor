<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h2 class="center">List of public places visited by confirmed cases</h2>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
            <table>
                <tr>
                  <th>Last Contact Date</th>
                  <th>Last Contact Time</th>
                  <th>Location</th>    
                </tr>
                <tr>
                  <td>10th November 2020</td>
                  <td>9pm - 11pm</td>    
                  <td>Kanpai 789 (Robertson Walk)</td>
                </tr>
                <tr>
                  <td>9th November 2020</td>
                  <td>9pm - 10.30pm</td>    
                  <td>Quench! Bistro &AMP; Bar (ORTO)</td>
                </tr>
                <tr>
                  <td>5th November 2020</td>
                  <td>8am - 9am</td>    
                  <td>BreadTalk (Causeway Point)</td>
                </tr>
                <tr>
                  <td>4th November 2020</td>
                  <td>10am - 11am</td>    
                  <td>Puma (Jewel)</td>
                </tr>
                <tr>
                  <td>2nd November 2020</td>
                  <td>11am - 2pm</td>    
                  <td>Guardian (Sunplaza)</td>
                </tr>
                <tr>
                  <td>29th October 2020</td>
                  <td>2pm - 4pm</td>    
                  <td>iSteaks (Star Vista)</td>
                </tr>
                <tr>
                  <td>28th October 2020</td>
                  <td>6pm - 9pm</td>    
                  <td>Cold Storage (Velocity@Novena)</td>
                </tr>
                <tr>
                  <td>26th October 2020</td>
                  <td>7pm - 9pm</td>    
                  <td>Victor's Kitchen (Sunshine Plaza)</td>
                </tr>
            </table>
        </slot>
       </section>
      <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-blue" @click="close">
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
    methods: {
      close() {
        this.$emit('close');
      },
    }
  }
</script>

<style scoped>
h2.center {
  text-align: center;
}

h2 {
  padding-left:30px;
}
.modal-backdrop {
  position:fixed;
  left:0;
  top:0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position:absolute;
  z-index:999;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 1000px;
  text-align: center;
}

.modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
  text-align: center;
}

.modal-header {
  color: #DC143C;
  justify-content: space-between;
}

.modal-footer {
  justify-content: flex-end;
  text-align: center;
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

table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 20px; 
}
tr:nth-child(odd) {
  background-color: #DCDCDC;
}
.btn-blue {
  color: white;
  background: #20344a;
  border: 1px solid#20344a;
  border-radius: 2px;
}
</style>

