<template>
    <div>
        <div>
            <h1>Places that Infectious Patients visited!</h1>
        </div>
        

        <gmap-map
            :center="center"
            :zoom="zoom"
            style="width:900px; height:450px; margin: 16px auto;"
            ref="map"
        >
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
        <gmap-info-window
            v-if="selectedLocation !== null"
            :position="{ lat: selectedLocation.lat, lng: selectedLocation.lng }"
            :opened="infoBoxOpen"
            @closeclick="infoBoxOpen = false;"
        >
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
</template>

<script>
    export default {
        data: () => ({
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
            }
        },
    }
</script>
<style scoped>
.vue-map-container,
.vue-map-container .vue-map {
    width: 100%;
    height: 100%;
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
</style>