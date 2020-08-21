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
            <div class="display-2 font-weight-light"> Comfortable Stay<br> The Alliston Way</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="grey lighten-1 py-16" justify="center">
      <v-col :cols="4" class="" align-self="center">
        <div class="text-h5 font-weight-bold">About Us</div>
        <div class="text-h7 my-5 font-weight-medium">
          The Red Pine Inn & Conference Centre, located in beautiful downtown
          Alliston, Ontario has a lot to offer. More than a 94-room hotel, the
          Red Pine Inn is a multifaceted facility, and a part of our towns proud
          history.
        </div>
        <div class="text-h7 font-weight-medium">
          The Red Pine is a place to stay both long and short term, with
          pet-friendly rooms, and is entirely non-smoking. 24 rooms have
          kitchenettes and there’s even an “allergy–friendly” zone for those who
          aren’t bringing their pets to stay.
        </div>
      </v-col>
      <v-col :cols="4" class="py-9" >
        <v-img src="https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></v-img>
      </v-col>
    </v-row>
<!--    <v-row class="grey lighten-2 py-16" justify="center">-->
<!--      <v-row></v-row>-->
<!--      <v-row>-->
<!--        <v-col :cols="3"></v-col>-->
<!--        <v-col :cols="3"></v-col>-->
<!--        <v-col :cols="3"></v-col>-->
<!--      </v-row>-->
<!--    </v-row>-->
    <v-row class="grey lighten-2 pa-8 pb-16 Major-amenities" align-content="center" justify="center">
      <div class="text-h4 font-italic font-weight-light mb-4 mt-16">Recent News</div>
      <v-container fluid>
        <v-row justify="center">
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
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
        flex: 3
      },
      {
        title: "Covid-19 Measures",
        subtitle: "May 1st 2020",
        text: "The Red Pine Inn & Conference Centre, located in beautiful downtown Alliston, Ontario has a lot to offer. More than a 94-room hotel, the Red Pine Inn is a multifaceted facility, and a part of our towns proud history. The Red Pine is a place to stay both long and short term, with pet-friendly rooms, and is entirely non-smoking.",
        flex: 3
      },
      {
        title: "Membership Notice",
        subtitle: "May 1st 2020",
        text: "The Red Pine Inn & Conference Centre, located in beautiful downtown Alliston, Ontario has a lot to offer. More than a 94-room hotel, the Red Pine Inn is a multifaceted facility, and a part of our towns proud history. The Red Pine is a place to stay both long and short term, with pet-friendly rooms, and is entirely non-smoking.",
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
  .caro-gradient{
    background: rgb(46,41,41);
    background: linear-gradient(90deg, rgba(46,41,41,0.6362920168067228) 100%, rgba(46,41,41,1) 100%, rgba(46,41,41,1) 100%);
  }
</style>
