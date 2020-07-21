<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">
          Two Queens
        </div>
      </v-col>
    </v-row>
    <v-row class="grey lighten-1">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <v-btn color="#b71c1c" class="mt-n5 ml-auto mr-6" dark rounded large>
        <span>Reserve</span>
      </v-btn>
    </v-row>
    <v-row class="grey lighten-1 py-3" justify="center">
      <v-col :cols="8" class="my-5">
        <div class="text-h4 pb-5 font-weight-black">Details</div>
        <div class="text-h6 my-5">
          Two queen size beds located in our 2 storey building (internal
          access). This deluxe room features mini fridge, spacious work desk
          with ergonomic working chair, phone, coffee maker, blow dryer, iron
          and ironing board, flat screen TV. Maximum occupancy is 5 people. Pets
          are not permitted and this is a non smoking building.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TwoQueens",
  data: () => ({
    items: [
      {
        src: require("../assets/images/home.jpg")
      },
      {
        src: require("../assets/images/Home2.jpg")
      },
      {
        src: require("../assets/images/Room1.jpg")
      }
    ]
  })
};
</script>

<style scoped>
.introText {
  color: #7f0000;
}
</style>
