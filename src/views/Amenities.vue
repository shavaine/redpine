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
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">24-Hour Front Desk</v-col>
          <v-col :cols="2" class="pt-0">Free Parking</v-col>
          <v-col :cols="2" class="pt-0">Air Conditioned</v-col>
          <v-col :cols="2" class="pt-0">Guest Laundromat</v-col>
        </v-row>
        <v-row justify="center">
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
          <v-col :cols="2"><v-icon size="48px" color="#b71c1c">mdi-phone</v-icon></v-col>
        </v-row>
        <v-row justify="center" class="amenityText">
          <v-col :cols="2" class="pt-0">Copy / Fax Service</v-col>
          <v-col :cols="2" class="pt-0">Daily Housekeeping</v-col>
          <v-col :cols="2" class="pt-0">Meeting Facilities</v-col>
          <v-col :cols="2" class="pt-0">Non-Smoking Rooms</v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Amenities"
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
    color: #FFF9C4;
  }
.amenityIcon {
  color: #b71c1c;
}
</style>
