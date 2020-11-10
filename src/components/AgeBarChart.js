import { Bar } from "vue-chartjs";
import parsed from '../assets/parsed.json';

export default {
    mixins: [Bar],
    components: {
    },
    data: () => ({
      chartdata: {
        labels: ['0-10','11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100'],
        datasets: [{
          data: [0,0,0,0,0,0,0,0,0,0],
          label:[],
          backgroundColor: [
             
            '#79a7d3', '#8a307f',
            '#26495c', '#1e2761',
            
            '#1868ae', '#d9a5b3', 
            '#c6d7eb',
            '#408ec6', 
            '#7a2048', 
            
            '#6883bc', 
            ]
        }],
        
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Bar Chart of COVID-19 Cases Age Group",
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      agegroup: [],
      count: [],
    }),
    async mounted() {
        this.getData();
        this.renderChart(this.chartdata, this.options);
      },
      methods: {
        getData() {
          // was initially used to count total number to get percentage //
          //let totalcount = 0;
          let count0=0;
          let count1=0;
          let count2=0;
          let count3=0;
          let count4=0;
          let count5=0;
          let count6=0;
          let count7=0;
          let count8=0;
          let count9=0;

          let currLength = Object.keys(parsed['age']).length;
          for (let i = 0; i < currLength; i++) {      
                if ((parsed['age'][i]) <= 10) {
                    count0++;     
                } else if ((parsed['age'][i]) <= 20) {
                    count1++;     
                } else if ((parsed['age'][i]) <= 30) {
                    count2++;     
                } else if ((parsed['age'][i]) <= 40) {
                    count3++;     
                } else if ((parsed['age'][i]) <= 50) {
                    count4++;     
                } else if ((parsed['age'][i]) <= 60) {
                    count5++;     
                } else if ((parsed['age'][i]) <= 70) {
                    count6++;     
                } else if ((parsed['age'][i]) <= 80) {
                    count7++;     
                } else if ((parsed['age'][i]) <= 90) {
                    count8++;     
                } else {
                    count9++;     
                } 
            
          }

//          if (!this.agegroup.includes(parsed['age'][i])) {
//            this.agegroup.push(parsed['age'][i]);
//            this.count.push(1);
//            this.agegroup.sort(function(a, b){return a-b});
//          } else {
//            let index = this.agegroup.indexOf(parsed['age'][i]);
//            this.count[index]++;
//            this.agegroup.sort(function(a, b){return a-b});
//          }
    
    // -- Code to figure out to process the data to be used for % --
    // remove the slashes and the tooltip to see the display with the name 
    //      for (let i = 0; i < this.count.length; i++) {
    //        this.count[i] = Math.round((this.count[i] / totalcount)*10000)/100;
    //      }
    //
          console.log("Ages: ", this.agegroup);
          console.log("count: ", this.count);
    
          this.chartdata.datasets[0].data[0] = count0;
          this.chartdata.datasets[0].data[1] = count1;
          this.chartdata.datasets[0].data[2] = count2;
          this.chartdata.datasets[0].data[3] = count3;
          this.chartdata.datasets[0].data[4] = count4;
          this.chartdata.datasets[0].data[5] = count5;
          this.chartdata.datasets[0].data[6] = count6;
          this.chartdata.datasets[0].data[7] = count7;
          this.chartdata.datasets[0].data[8] = count8;
          this.chartdata.datasets[0].data[9] = count9;
        }
      }

  }


