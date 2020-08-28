<template>
  <v-container class="homepage py-0" fluid>
    <!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text"> Things To Do</div>
      </v-row>
    </v-row>
    <!--    banner-->
    <v-row class="grey lighten-2 pa-3 Major-amenities" align-content="center">
      <v-container fluid>
        <div class="text-h4 font-italic font-weight-light mb-4 mt-6 text-center">Attractions</div>
        <v-row justify="center">
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex" class="px-7 mt-3">
            <v-card class="pa-6 rounded-xl" color="grey lighten-1">
              <v-card-title class="px-0" v-text="card.title"></v-card-title>
              <v-card-subtitle class="px-0" v-text="card.subtitle"></v-card-subtitle>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="250px"
              >
              </v-img>
              <v-card-actions class="pa-0"> </v-card-actions>
              <v-card-text class="px-0 font-weight-medium" v-text="card.text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col v-for="card in cards1" :key="card.title" :cols="card.flex" class="px-7 my-8">
            <v-card class="pa-6 rounded-xl" color="grey lighten-1">
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="250px"
              >
              </v-img>
              <v-card-actions class="pa-0"> </v-card-actions>
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
  name: "ThingsToDo",
  data: () => ({
    cards: [
      {
        title: "Tanger Outlet",
        subtitle: "15km",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 3
      },
      {
        title: "Museum On The Boyne",
        subtitle: "15km",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3
      },
      {
        title: "The Gibson Centre",
        subtitle: "15km",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3
      }
    ],
    cards1: [
      {
        title: "Imagine Cinemas",
        subtitle: "15km",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 3
      },
      {
        title: "Barrie Attractions",
        subtitle: "15km",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3
      },
      {
        title: "GTA Attractions",
        subtitle: "15km",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3
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
</style>
