import { Doughnut } from 'vue-chartjs'
import parsed from '../assets/parsed.json';

export default {
  mixins: [Doughnut],
  components: {
  },
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)'
          ]
      }],
    },
    options: {
      responsive: true,
      title: {
          display: true,
          text: "Proportion of COVID-19 Cases by Age",
        },
      tooltips: {
        callbacks: {
        label: function(tooltipItem, data) {
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.round((currentValue/total) * 10000)/100;         
          return percentage + "%";
        }
        }
      }
    },
    countries: [],
    count: [],
  }),
  async mounted() {
    this.getData();
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    getData() {
      let totalcount = 0;
      
      let currLength = Object.keys(parsed['gender']).length;
      for (let i = 0; i < currLength; i++) {
        totalcount ++;
        if (!this.countries.includes(parsed['gender'][i])) {
          this.countries.push(parsed['gender'][i]);
          this.count.push(1);
        } else {
          let index = this.countries.indexOf(parsed['gender'][i]);
          this.count[index]++;
        }
      }
// -- Code to figure out to process the data to be used for % --
//      for (let i = 0; i < this.count.length; i++) {
//        this.count[i] = Math.round((this.count[i] / totalcount)*10000)/100;
//      }
//
      console.log("countries: ", this.countries);
      console.log("count: ", this.count);

      this.chartdata.labels = this.countries;
      this.chartdata.datasets[0].data = this.count;
    }
  }
}