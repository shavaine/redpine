<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">Amenities</div>
      </v-col>
    </v-row>
    <v-row>
      <v-container fluid class="footer-color text-center ">
        <v-row justify="center" class="amenityIcon">
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">24-Hour Front Desk</v-col>
          <v-col :cols="2" class="pt-0">Free Parking</v-col>
          <v-col :cols="2" class="pt-0">Air Conditioned</v-col>
          <v-col :cols="2" class="pt-0">Guest Laundromat</v-col>
        </v-row>
        <v-row justify="center">
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
          <v-col :cols="2"
            ><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col
          >
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">Copy / Fax Service</v-col>
          <v-col :cols="2" class="pt-0">Daily Housekeeping</v-col>
          <v-col :cols="2" class="pt-0">Meeting Facilities</v-col>
          <v-col :cols="2" class="pt-0">Non-Smoking Rooms</v-col>
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
.introText {
  color: #7f0000;
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
