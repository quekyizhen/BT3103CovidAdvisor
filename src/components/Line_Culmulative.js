import { Line } from 'vue-chartjs'
import parsed from '../assets/parsed_cul.json';



export default {
  mixins: [Line],
  components: {
  },
  data: () => ({
    chartdata: {
        // Months label on x-axis //
      labels: [],
      datasets: [{
          label:'Cumulative Cases',
        data: [],
        backgroundColor: [
          '#79a7d3'
      ],
      pointHoverBackgroundColor: '#ADD8E6',
      pointHoverRadius: 6,
      borderColor: '#1868ae'
      }],
      
    },
    options: {
        title: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 10,
        scales: {
          xAxes: [{
            type:'time',
            time: {
              displayFormats: {day:'MMM D'},
              unit: 'day',
              unitStepSize: 10
            },
            ticks: {
              maxRotation: 120,
              minRotation: 60,
              stepSize: 1,
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 60000,
              stepSize: 5000,
            }
          }]
        }
    },
    dates: [],
    count: [],
  }),
  async mounted() {
    this.getData();
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    getData() {      
        let currLength = Object.keys(parsed['Number']).length;
        for (let i = 0; i < currLength; i++) {
          this.count.push(parsed['Number'][i]);
          this.dates.push(parsed['Date'][i])
        }
        console.log("dates: ", this.dates);
        console.log("count: ", this.count);
        this.chartdata.labels = this.dates;
        this.chartdata.datasets[0].data = this.count;
    }
  }
}
