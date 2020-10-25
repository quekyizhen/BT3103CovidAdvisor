<template>
    <div>
        <div>
            <h1>Places that Infectious Patients visited!</h1>
        </div>
            <div>
                <h1>Map coordinates:</h1>
                <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
            </div>
        <gmap-map
            :center="myCoordinates"
            :zoom="zoom"
            style="width:600px; height:400px; margin: 32px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        >
        <gmap-marker
            :key="index"
            v-for="(location, index) in locations"
            :position="location.position"
            :clickable="true"
            :draggable="false"
            :label="location.placename"
            @click="openInfoWindow(location);"
        >
        <gmap-info-window
            v-if="info_marker !== null"
            :position="{ lat: info_marker.lat, lng: info_marker.lng }"
            :opened="infoBoxOpen"
            @closeclick="infoBoxOpen = false;"
            :options="{
                pixelOffset: {
                    width: 0,
                    height: -5
                }
            }"
        > 
            <div class="infoWindow" style="width: 300px;">
                <h5>Last Contact Date: 17th October 2020 </h5>
                <h5>Last Contact Time: 2pm - 4pm</h5>
                <h2 id="infoWindow-location">{{ info_marker.name }}</h2>
                <button @click="closeInfoWindow();">Close</button>
            </div>
            </gmap-info-window> 
        </gmap-marker>   
        </gmap-map>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                info_marker: null,
                infowindow: {lat: 1.350, lng: 103.810},
                infoBoxOpen: false,
                map: null,
                myCoordinates: {
                    lat: 0,
                    lng: 0
                },
                zoom: 11,
                center: {lat: 1.350, lng: 103.810},
                locations: [
                    {
                        placename: "Star Vista",
                        position: {lat: 1.307, lng: 103.788},
                        date: "Last Contact Date: 17th October 2020"
                    }, 
                    {
                        placename: "Singapore EXPO",
                        position: {lat: 1.334, lng: 103.960},
                        date: "Last Contact Date: 17th October 2020"

                    }
                ],
            }
        },
        created() {
            this.$getLocation({})
                .then(coordinates => {
                    this.myCoordinates = coordinates;
                })
                .catch(error => alert(error));

        },
        mounted() {
            // add the map to a data object
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        },
        methods: {
            handleDrag() {
                // get center and zoom level, store in localstorage
                let center = {
                    lat: this.map.getCenter().lat().toFixed(3),
                    lng: this.map.getCenter().lng().toFixed(3)
                };
                let zoom = this.map.getZoom();

                localStorage.center = JSON.stringify(center);
                localStorage.zoom = zoom;
            },
            openInfoWindow(location) {
                console.log(location);
                this.info_marker = location;
                this.infoBoxOpen = true;
            },
            closeInfoWindow() {
                this.infoBoxOpen = false;
            }
        },
        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }

                return {
                    lat: this.map.getCenter().lat().toFixed(3),
                    lng: this.map.getCenter().lng().toFixed(3)
                }
            }
        }
    }
</script>
<style scoped>
.vue-map-container,
.vue-map-container .vue-map {
    width: 100%;
    height: 100%;
}
</style>