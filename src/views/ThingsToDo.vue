<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">Things To Do</div>
      </v-col>
    </v-row>
    <v-row class="grey lighten-1 pa-3 Major-amenities" align-content="center">
      <v-container fluid>
        <v-row justify="center">
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card color="#363636" dark>
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
        <v-row justify="center">
          <v-col v-for="card in cards1" :key="card.title" :cols="card.flex">
            <v-card color="#363636" dark>
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
.introText {
  color: #7f0000;
}
</style>
