<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">
          Welcome To Red Pine Inn Alliston
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="grey lighten-1 py-8" justify="center">
      <v-col :cols="8" class="my-5">
        <div class="text-h4 pb-5 font-weight-black">About Us</div>
        <div class="text-h6 my-5">
          The Red Pine Inn & Conference Centre, located in beautiful downtown
          Alliston, Ontario has a lot to offer. More than a 94-room hotel, the
          Red Pine Inn is a multifaceted facility, and a part of our towns proud
          history.
        </div>
        <div class="text-h6">
          The Red Pine is a place to stay both long and short term, with
          pet-friendly rooms, and is entirely non-smoking. 24 rooms have
          kitchenettes and there’s even an “allergy–friendly” zone for those who
          aren’t bringing their pets to stay.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
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
