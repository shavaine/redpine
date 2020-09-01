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
          <v-col v-for="card in cards" :key="card.title" :lg="3" :md="4" :sm="6" :cols="12" class="px-lg-7 mx-lg-7 mt-3">
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
              <v-card-text class="px-0 font-weight-medium body-1" v-text="card.text"></v-card-text>
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
        subtitle: "16.9km",
        text:
          "Get your shopping on! With many brand-name store to choose from, you can be sure to find something you like.",
        src: require("../assets/images/Tanger.jpg"),
        flex: 3
      },
      {
        title: "Museum On The Boyne",
        subtitle: "3km",
        text:
          "Built in 1914, There are many things to see and do at the Museum on the Boyne. Get your fill for Simcoe County!",
        src: require("../assets/images/Museum.jpg"),
        flex: 3
      },
      {
        title: "The Gibson Centre",
        subtitle: "2.9km",
        text:
          "Rooted in Alliston history, the Gibson Centre features art for viewing, while also being a venue for weddings",
        src: require("../assets/images/Gibson.jpg"),
        flex: 3
      },
      {
        title: "Imagine Cinemas",
        subtitle: "4km",
        text:
                "Great place to see the latest movies, while you enjoy your favourite snacks and VIP treatment with better seating.",
        src: require("../assets/images/Imagine.jpg"),
        flex: 3
      },
      {
        title: "Barrie Attractions",
        subtitle: "40km",
        text:
                "With a beautiful lakeshore, theres always something to do in Barrie! Enjoy a night out as local restaurants. ",
        src: require("../assets/images/Barrie.jpg"),
        flex: 3
      },
      {
        title: "GTA Attractions",
        subtitle: "65km-100km",
        text:
                "Being the most populated area in Canada, there are many attractions for people to do and places for people to see.",
        src: require("../assets/images/GTA.jpg"),
        flex: 3
      }
    ],
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
