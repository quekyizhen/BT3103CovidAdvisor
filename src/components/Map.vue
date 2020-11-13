<template>
    <div> 
        <div id="title">
            <h1>Public places that confirmed cases had visited during infectious period</h1>
            <p>These public places had been visited for more than 30 minutes by the confirmed cases in the community. 
                Those who had been identified as close contacts of confirmed cases would already have been notified by MOH. 
                <br>Click <a target="_blank" href="https://wereyouthere.safeentry.gov.sg/"> here</a> to check if you have been to these places.
            </p>
            <p> If you have been at these locations during these specified timings:
                <ul>
                    <li>monitor your health closely for 14 days from the date of visit</li>
                    <li>see a doctor promptly if you develop symptoms and inform the doctor of your exposure history</li>
                </ul>
            </p>
            <button type="button" style="font-size:18px;font-weight:bold;margin:10px;" @click="onClickEvent()">List of places</button>
            <div v-show="showList">
                <h2>List of public places visited by confirmed cases</h2>
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
            </div>
        </div>
        <div id="large-container">
<!-- This is the Map below the above text!  -->
            <div id="map-container">
                <gmap-map 
                    :center="center"
                    :zoom="zoom"
                    style="width:1200px; height:600px; margin: 6px auto;"
                    ref="map"
                >
                <!-- There are 3 different marker denoting the 3 diff icons (green,red,yellow) -->
                <gmap-marker
                    :key="index"
                    v-for="(location, index) in locations1"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :clickable="true"
                    @click="openInfoWindow(location);"
                    icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                />
                <gmap-marker
                    :key="index"
                    v-for="(location, index) in locations2"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :clickable="true"
                    @click="openInfoWindow(location);"
                    icon="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                />
                <gmap-marker
                    :key="index"
                    v-for="(location, index) in locations3"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :clickable="true"
                    @click="openInfoWindow(location);"
                    icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                />

                <!-- The Pop-up when you click on the icon! -->
                <gmap-info-window
                    v-if="selectedLocation !== null"
                    :position="{ lat: selectedLocation.lat, lng: selectedLocation.lng }"
                    :opened="infoBoxOpen"
                    @closeclick="infoBoxOpen = false;"
                >
                <!-- info from the data -->
                    <div class="infoWindow" style="width: 270px; height: 120px;">
                        <p class="infoW-location" style="text-align:center">{{ selectedLocation.name }}</p>
                        <p class="infoW-shop" style="text-align:left"> - {{ selectedLocation.shop }}</p>
                        <p class="infoW-date" style="text-align:left">{{ selectedLocation.date }}</p>
                        <p class="infoW-time" style="text-align:left">{{ selectedLocation.time }}</p>
                        <button class="closebutton" @click="closeInfoWindow();">Close</button>
                    </div>
                </gmap-info-window>
                </gmap-map>
            </div>
            <div id="legend-container">
                <img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" width="25" height="25" alt="Red Marker Image">
                <p>: place visited by confirmed case less than 7 days ago </p>
                <img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" width="25" height="25" alt="Yellow Marker Image">
                <p>: place visited by confirmed case between 7 to 14 days ago </p>
                <img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png" width="25" height="25" alt="Yellow Marker Image">
                <p>: place visited by confirmed case more than 14 days ago </p>
            </div>
        </div>    
    </div>
</template>

<script>
    export default {
        data: () => ({
            showList: false,
            selectedLocation: null,
            infoBoxOpen: false,
            map: null,
            myCoordinates: {
                lat: 0,
                lng: 0
            },
            zoom: 11,
            center: {lat: 1.350, lng: 103.810},
            locations1: [
                {
                    Id: 1,
                    name: "Star Vista",
                    shop: "iSteaks",
                    lat: 1.307,
                    lng: 103.788,
                    date: "Last Contact Date: 29th October 2020",
                    time: "Last Contact Time: 2pm - 4pm"
                },
                {
                    Id: 2,
                    name: "Sunshine Plaza",
                    shop: "Victor's Kitchen",
                    lat: 1.3,
                    lng: 103.851,
                    date: "Last Contact Date: 26th October 2020",
                    time: "Last Contact Time: 7pm - 9pm"
                },
                {
                    Id: 3,
                    name: "Velocity@Novena",
                    shop: "Cold Storage",
                    lat: 1.320,
                    lng: 103.844,
                    date: "Last Contact Date: 28th October 2020",
                    time: "Last Contact Time: 6pm - 9pm"
                },
                ],
            locations2:[ 
                {
                    Id: 4,
                    name: "Jewel",
                    shop: "Puma",
                    lat: 1.336,
                    lng: 103.99,
                    date: "Last Contact Date: 4th November 2020",
                    time: "Last Contact Time: 10am - 11am"
                },
                {
                    Id: 5,
                    name: "Causeway Point",
                    shop: "BreadTalk",
                    lat: 1.436,
                    lng: 103.786,
                    date: "Last Contact Date: 5th November 2020",
                    time: "Last Contact Time: 8am - 9am"
                },
                {
                    Id: 6,
                    name: "Sun Plaza",
                    shop: "Guardian",
                    lat: 1.448,
                    lng: 103.820,
                    date: "Last Contact Date: 2nd November 2020",
                    time: "Last Contact Time: 11am - 2pm"
                }
            ],
            locations3:[ 
                {
                    Id: 11,
                    name: "Robertson Walk",
                    shop: "Kanpai 789",
                    lat: 1.292,
                    lng: 103.841,
                    date: "Last Contact Date: 10th November 2020",
                    time: "Last Contact Time: 9pm - 11pm"
                },
                {
                    Id: 12,
                    name: "ORTO",
                    shop: "Quench! Bistro & Bar",
                    lat: 1.413,
                    lng: 103.829,
                    date: "Last Contact Date: 9th November 2020",
                    time: "Last Contact Time: 9pm - 10.30pm"
                }
            ]
            }
        ),
        
        methods: {
            openInfoWindow(location) {
                console.log(location);
                this.selectedLocation = location;
                this.infoBoxOpen = true;
            },
            closeInfoWindow() {
                this.infoBoxOpen = false;
            }, 
            onClickEvent() {
                this.showList =!this.showList;
            }
        },
    }
    
</script>
<style scoped>
#title {
    text-align: left;
    padding-left: 40px;
}
.vue-map-container,
.vue-map-container .vue-map {
    width: 100%;
    height: 100%;
}
/* labelled properly under infowindow what css apply to which! */
.infoWindow {
    text-align: center;
}
.infoW-location {
  font-family:Montserrat;
  line-height: 1em;
  display: block;
  font-size: 1.6em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0em;
  font-weight: bold;
}
.infoW-shop {
    font-family:Montserrat;
    color:maroon;
  line-height: 0.5em;
  display: block;
  font-size: 1.2em;
  margin-left: 0.2em;
  font-weight: bold;

}
.infoW-date {
    font-family:Montserrat;
  line-height: 0.3em;
  display: block;
  font-size: 1.1em;
  margin-left: 2em;
}

.infoW-time {
    font-family:Montserrat;
  line-height: 0.3em;
  display: block;
  font-size: 1.1em;
  margin-left: 2em;
}

.closebutton {
  line-height: 1.3em;
}
a {
  color: blue;
}
a:hover {
    color:red;
    text-decoration: underline;
}

#map-container {
    display: inline-block;
    padding: 60px;
    width: 1400px;
}

#legend-container {
    text-align: center;
    flex-grow: 1;
    margin: 30px;
    margin-top:90px;
    max-width:300px;
    max-height:180px;
    padding:1em;
	background:whitesmoke;
    display: inline-block;
}

img {
    float: left;
}

#large-container {
    display: flex;
}

button {
    display: inline-block;
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
</style>