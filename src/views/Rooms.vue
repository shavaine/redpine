<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">Rooms</div>
      </v-col>
    </v-row>
    <!--    <v-row>-->
    <!--      <v-col></v-col>-->
    <!--      <v-col></v-col>-->
    <!--      <v-col></v-col>-->
    <!--    </v-row>-->
    <v-row class="grey lighten-1 pa-3">
      <v-container fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card color="#363636">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions >
                <v-btn color="#b71c1c" outlined>
                  <span>Reserve</span>
                </v-btn>
<!--                <v-spacer></v-spacer>-->

                <v-btn color="#b71c1c" outlined>
                  <span>Details</span>
                </v-btn>
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
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4
      },
      {
        title: "Kitchenette with Sofa",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4
      },
      {
        title: "Two Double Beds (Pet Friendly)",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4
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
