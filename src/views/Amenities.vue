<template>
  <v-container class="homepage py-0" fluid>
    <!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text">Amenities</div>
      </v-row>
    </v-row>
    <!--    banner-->
    <!--    General Amenities-->
    <v-row>
      <v-container fluid class="footer-color text-center ">
        <div class="text-h5 amenityText my-3">General Amenities</div>
        <v-row justify="center" class="amenityIcon">
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-hours-24</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-parking</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-rv-truck</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-washing-machine</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :sm="2" :cols="3" class="pt-0">24-Hour Front Desk</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Free Parking</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Recreation Vehicle Parking</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Guest Laundromat</v-col>
        </v-row>
        <v-row justify="center">
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-fax</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-spray-bottle</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-account-group</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
            ><v-icon size="48px" color="#b71c1c">mdi-smoking-off</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :sm="2" :cols="3" class="pt-0">Copy / Fax Service</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Daily Cleaning</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Meeting Facilities</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Non-Smoking Rooms</v-col>
        </v-row>
        <v-row justify="center" class="amenityIcon">
          <v-col :sm="2" :cols="3"
          ><v-icon size="48px" color="#b71c1c">mdi-bed</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
          ><v-icon size="48px" color="#b71c1c">mdi-wheelchair-accessibility</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
          ><v-icon size="48px" color="#b71c1c">mdi-snowflake</v-icon></v-col
          >
          <v-col :sm="2" :cols="3"
          ><v-icon size="48px" color="#b71c1c">mdi-air-conditioner</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :sm="2" :cols="3" class="pt-0">Rollaway Beds</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Wheel Chair Access</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Ice Machines</v-col>
          <v-col :sm="2" :cols="3" class="pt-0">Air Conditioned</v-col>
        </v-row>
      </v-container>
    </v-row>

    <v-row class="grey lighten-1 py-sm-16" justify="center" align="center">
      <v-col :lg="4" :md="5" :xs="8" :sm="6" :cols="12" class="py-9" >
        <v-img src="../assets/images/Pool2.jpg"></v-img>
      </v-col>
      <v-col :lg="4" :md="5" :xs="8" :sm="6" :cols="12" class="ml-sm-n14" >
        <v-card color="grey" class="card-color" dark>
          <v-card-title class="justify-center card-color">Indoor Pool</v-card-title>
          <v-card-subtitle class=" text-center card-color"><div class="card-color subtitle-2">Salt Water</div></v-card-subtitle>
          <v-card-text color="red" class="justify-center px-sm-16 " >
            <div class="card-color subtitle-2">Locker rooms, complimentary towel service, showers and hairdryer, water station. The pool area is unsupervised, children under the age of 16 are prohibited to enter the Fitness Centre.</div>
          </v-card-text>
          <v-card-actions class="justify-center pb-5">
            <v-btn color="#7f0000" dark rounded outlined to="/">
              <span class="text-capitalize mx-5">Gallery</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="grey lighten-1 py-16" justify="center" align="center">
      <v-col :lg="4" :md="5" :xs="8" :sm="6" :cols="12" class="front mr-sm-n14" >
        <v-card color="grey" class="card-color" dark>
          <v-card-title class="justify-center card-color">Fitness Facility</v-card-title>
          <v-card-subtitle class=" text-center card-color"><div class="card-color subtitle-2">Free Weights / Machines</div></v-card-subtitle>
          <v-card-text color="red" class="justify-center px-sm-16 " >
            <div class="card-color subtitle-2">Open concept exercise area for those who wish to work out. We have the following equipment: stationary bicycles, stair master, free weights, elliptical machines, and treadmills.</div>
          </v-card-text>
          <v-card-actions class="justify-center pb-5">
            <v-btn color="#7f0000" dark rounded outlined to="/">
              <span class="text-capitalize mx-5">Gallery</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col :lg="4" :md="5" :xs="8" :sm="6" :cols="12" class="py-sm-9" >
        <v-img src="../assets/images/Fitness.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Amenities"
};
</script>

<style scoped>
  .banner {
    height: 250px;
  }
  .hero-image {
    background-image: url("../assets/images/Pillows.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 250px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .caro-gradient{
    background: rgb(46,41,41);
    background: linear-gradient(90deg, rgba(46,41,41,0.6362920168067228) 100%, rgba(46,41,41,1) 100%, rgba(46,41,41,1) 100%);
  }
.footer-color {
  background-color: #7f0000;
}
.amenityText {
  color: #fff9c4;
}
.amenityIcon {
  color: #b71c1c;
}
  .card-color {
    color: #7f0000;
  }
  .front {
    z-index: 2;
  }
/*.Major-amenities {*/
/*  height: 425px;*/
/*}*/
</style>
