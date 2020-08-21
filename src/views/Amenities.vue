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
    <v-row>
      <v-container fluid class="footer-color text-center ">
        <div class="text-h5 amenityText my-3">General Amenities</div>
        <v-row justify="center" class="amenityIcon">
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-hours-24</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-parking</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-rv-truck</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-washing-machine</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">24-Hour Front Desk</v-col>
          <v-col :cols="2" class="pt-0">Free Parking</v-col>
          <v-col :cols="2" class="pt-0">Recreational Vehicle Parking</v-col>
          <v-col :cols="2" class="pt-0">Guest Laundromat</v-col>
        </v-row>
        <v-row justify="center">
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-fax</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-spray-bottle</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-account-group</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-smoking-off</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">Copy / Fax Service</v-col>
          <v-col :cols="2" class="pt-0">Daily Housekeeping</v-col>
          <v-col :cols="2" class="pt-0">Meeting Facilities</v-col>
          <v-col :cols="2" class="pt-0">Non-Smoking Rooms</v-col>
        </v-row>
        <v-row justify="center" class="amenityIcon">
          <v-col :cols="2"
          ><v-icon size="48px" color="#b71c1c">mdi-bed</v-icon></v-col
          >
          <v-col :cols="2"
          ><v-icon size="48px" color="#b71c1c">mdi-wheelchair-accessibility</v-icon></v-col
          >
          <v-col :cols="2"
          ><v-icon size="48px" color="#b71c1c">mdi-snowflake</v-icon></v-col
          >
          <v-col :cols="2"
          ><v-icon size="48px" color="#b71c1c">mdi-air-conditioner</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">Rollaway Beds</v-col>
          <v-col :cols="2" class="pt-0">Wheel Chair Access</v-col>
          <v-col :cols="2" class="pt-0">Ice Machines</v-col>
          <v-col :cols="2" class="pt-0">Air Conditioned</v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row class="grey lighten-1 pa-3 Major-amenities" align-content="center">
      <v-container fluid>
        <v-row justify="center">
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card color="#363636" dark>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="250px"
              >
              </v-img>
              <v-card-actions class="pa-0">
                <v-btn color="#b71c1c" class="mt-n5 ml-auto mr-5" dark rounded to="/">
                  <span class="text-subtitle-2">Gallery</span>
                </v-btn>
              </v-card-actions>
              <v-card-title v-text="card.title" class="pt-0"></v-card-title>
              <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
              <v-card-text v-text="card.text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Amenities",
  data: () => ({
    cards: [
      {
        title: "Indoor Pool",
        subtitle: "Salt Water",
        text:
          "Locker rooms, complimentary towel service, showers and hairdryer, water station. The pool area is unsupervised, children under the age of 16 are prohibited to enter the Fitness Centre.",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
        link: "/queens"
      },
      {
        title: "Fitness Facility",
        subtitle: "Free Weights / Machines",
        text:
          "Open concept exercise area for those who wish to work out. We have the following equipment: stationary bicycles, stair master, free weights, elliptical machines, and treadmills",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
        link: "/kitchenette"
      }
    ]
  })
};
</script>

<style scoped>
  .banner {
    height: 250px;
  }
  .hero-image {
    background-image: url("../assets/images/hotel-room.jpg"); /* The image used */
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
/*.Major-amenities {*/
/*  height: 425px;*/
/*}*/
</style>
