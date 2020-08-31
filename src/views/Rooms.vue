<template>
  <v-container class="homepage py-0" fluid>
<!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text"> Rooms</div>
      </v-row>
    </v-row>
<!--    banner-->
    <v-row class="grey lighten-1 pa-3 room-sec" align-content="center" >
      <v-container fluid class="my-5">
        <v-row justify="center" >
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex" >
            <v-card color="grey" class="pa-5 rounded-lg">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="250px"
              >
              </v-img>
              <v-card-title class="justify-center card-color pb-0" v-text="card.title"></v-card-title>
              <v-card-actions>
                <v-row dense>
                  <v-col :cols="6"> <v-btn class="font-weight-light" block color="#7f0000" outlined to="/reservations">
                    <span>Reserve</span>
                  </v-btn></v-col>
                  <v-col :cols="6"><v-btn class="font-weight-light" block color="#7f0000" outlined :to="card.link">
                    <span>Details</span>
                  </v-btn></v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Rooms",
  data: () => ({
    cards: [
      {
        title: "Two Queen Beds",
        // src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        src: require("../assets/images/Queens.jpg"),
        flex: 3,
        link: "/queens"
      },
      {
        title: "Kitchenette with Sofa",
        src: require("../assets/images/Kitchen.jpg"),
        flex: 3,
        link: "/kitchenette"
      },
      {
        title: "One Double Bed (Pet Friendly)",
        src: require("../assets/images/Single.jpg"),
        flex: 3,
        link: "/double"
      }
    ]
  })
};
</script>

<style scoped>
.room-sec {
  height: 575px;
}
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
.card-color {
  color: #7f0000;
}
</style>
