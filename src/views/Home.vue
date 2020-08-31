<template>
  <v-container class="homepage py-0" fluid>
    <v-row align-content="center">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        >
          <v-row
                  class="fill-height caro-gradient"
                  align="center"
                  justify="center"
          >
            <div class="text-sm-h2 text-h4 font-weight-light text-center">
              <span>Comfortable Stay</span>
              <br>
              <span>The Alliston Way</span>
              <br>
              <v-btn color="#7f0000" to="/reservations" dark rounded>
                <span class="text-capitalize mx-5 ">Book Now</span>
              </v-btn>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="grey lighten-1 py-16" justify="center">
      <v-col :lg="4" :md="5" :xs="8" align-self="center" class="px-10">
        <div class="text-h4 font-weight-bold">About Us</div>
        <div class="text-sm-h6 text-body-1 my-5 font-weight-light">
          The Red Pine Inn & Conference Centre, located in beautiful downtown
          Alliston, Ontario has a lot to offer. More than a 94-room hotel, the
          Red Pine Inn is a multifaceted facility, and a part of our towns proud
          history.
        </div>
        <div class="text-sm-h6 text-body-1 font-weight-light">
          The Red Pine is a place to stay both long and short term, with
          pet-friendly rooms, and is entirely non-smoking. 24 rooms have
          kitchenettes and there’s even an “allergy–friendly” zone for those who
          aren’t bringing their pets to stay.
        </div>
      </v-col>
      <v-col :cols="1" >
      </v-col>
      <v-col :lg="4" :md="5" :xs="8" class="py-9 px-10" >
        <v-img src="../assets/images/Home3.jpg"></v-img>
      </v-col>
    </v-row>

    <v-row class="grey lighten-2 pa-sm-8 pb-16" align-content="center" justify="center">
      <div class="text-h4 font-italic font-weight-light mb-4 mt-16">Recent News</div>
      <v-container fluid>
        <v-row justify="center">
          <v-col v-for="card in cards" :key="card.title" :lg="3" :md="4" :sm="6" :cols="12">
            <v-card color="grey lighten-1" class="pa-3 rounded-xl">
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
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
    ],
    cards: [
      {
        title: "Rec Centre Reopening",
        subtitle: "May 1st 2020",
        text: "The Red Pine Inn & Conference Centre, located in beautiful downtown Alliston, Ontario has a lot to offer. More than a 94-room hotel, the Red Pine Inn is a multifaceted facility, and a part of our towns proud history. The Red Pine is a place to stay both long and short term, with pet-friendly rooms, and is entirely non-smoking.",
        flex: 4
      },
      {
        title: "Covid-19 Measures",
        subtitle: "May 1st 2020",
        text: "The Red Pine Inn & Conference Centre, located in beautiful downtown Alliston, Ontario has a lot to offer. More than a 94-room hotel, the Red Pine Inn is a multifaceted facility, and a part of our towns proud history. The Red Pine is a place to stay both long and short term, with pet-friendly rooms, and is entirely non-smoking.",
        flex: 4
      },
      {
        title: "Membership Notice",
        subtitle: "May 1st 2020",
        text: "The Red Pine Inn & Conference Centre, located in beautiful downtown Alliston, Ontario has a lot to offer. More than a 94-room hotel, the Red Pine Inn is a multifaceted facility, and a part of our towns proud history. The Red Pine is a place to stay both long and short term, with pet-friendly rooms, and is entirely non-smoking.",
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
  .caro-gradient{
    background: rgb(46,41,41);
    background: linear-gradient(90deg, rgba(46,41,41,0.6362920168067228) 100%, rgba(46,41,41,1) 100%, rgba(46,41,41,1) 100%);
  }
</style>
