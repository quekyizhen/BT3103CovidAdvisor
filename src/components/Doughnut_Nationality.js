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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
      }],
      
    },
    options: {
        title: {
          display: true,
          text: "Proportion of COVID-19 Cases by Nationality",
        },
        responsive: true,
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
      
      let currLength = Object.keys(parsed['nationality']).length;
      for (let i = 0; i < currLength; i++) {
        totalcount ++;
        if (!this.countries.includes(parsed['nationality'][i])) {
          this.countries.push(parsed['nationality'][i]);
          this.count.push(1);
        } else {
          let index = this.countries.indexOf(parsed['nationality'][i]);
          this.count[index]++;
        }
      }

      for (let i = 0; i < this.count.length; i++) {
        this.count[i] = Math.round((this.count[i] / totalcount )*10000) / 100;
      }

      console.log("countries: ", this.countries);
      console.log("count: ", this.count);

      this.chartdata.labels = this.countries;
      this.chartdata.datasets[0].data = this.count;
    }
  }
}