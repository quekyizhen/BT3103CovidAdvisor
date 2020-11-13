import { Doughnut } from 'vue-chartjs'
// Getting data from the json file //
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
          '#79a7d3', '#8a307f',
          '#26495c', '#1e2761',
          
          '#1868ae', '#d9a5b3', 
            ],
          hoverBorderWidth: 8,
          hoverBorderColor: ['#79a7d3', '#8a307f',
          '#26495c', '#1e2761',
          
          '#1868ae', '#d9a5b3',]
      }],
      
    },
    options: {
        title: {
          // false means no title //
          display: true,
        },
        responsive: true,
        // this tooltip is to convert the data and get a % //
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return ' '+ percentage + '%';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }, 
    },
    countries: [],
    count: [],
  }),
    // call the method to get data from the json file//

  async mounted() {
    this.getData();
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    getData() {
      // was initially used to count total number to get percentage //
      //let totalcount = 0;
      
      let currLength = Object.keys(parsed['nationality']).length;
      for (let i = 0; i < currLength; i++) {      
        // was initially used to count total number to get percentage //
        //totalcount ++;
        if (!this.countries.includes(parsed['nationality'][i])) {
          this.countries.push(parsed['nationality'][i]);
          this.count.push(1);
        } else {
          let index = this.countries.indexOf(parsed['nationality'][i]);
          this.count[index]++;
        }
      }

// -- Code to figure out to process the data to be used for % --
// remove the slashes and the tooltip to see the display with the name 
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
