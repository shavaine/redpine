<template>
  <v-container class="homepage py-0" fluid>
    <!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text">Two Queens</div>
      </v-row>
    </v-row>
    <!--    banner-->
    <v-row class="grey lighten-1 py-16" justify="center">
      <v-col :cols="4" class="py-9" >
        <v-carousel hide-delimiters>
          <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col :cols="4" class="pa-10" align-self="center">
        <div class="text-h5 font-weight-bold">Details</div>
        <div class="text-h6 my-5 font-weight-light">
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
        src: require("../assets/images/Queens.jpg")
      },
      {
        src: require("../assets/images/Queens.jpg")
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
</style>
