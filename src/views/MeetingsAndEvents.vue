<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">
          Meetings & Events
        </div>
      </v-col>
    </v-row>
    <v-row class="grey lighten-1" justify="center">
      <v-col :cols="8" class="my-5">
        <div class="text-h4 pb-5 font-weight-black">Conferences</div>
        <div class="text-h6 my-3">
          Situated in Alliston, our on-site banquet, conference and reception
          centre offers you the opportunity to make your next business meeting,
          conference or banquet a big success! we serve all of New Tecumseth's
          communities and can provide for up to 100 people.
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="grey lighten-1">
      <v-col :cols="2"
        ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
      ></v-col>
      <v-col :cols="2"
        ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
      ></v-col>
      <v-col :cols="2"
        ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
      ></v-col>
      <v-col :cols="2"
        ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
      ></v-col>
    </v-row>
    <v-row class="grey lighten-1" justify="center">
      <v-col :cols="8">
        <div class="text-h6 my-5">
          Formal or informal setup for banquets or business meetings in class room, theatre or horseshoe setup format is available.
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="grey lighten-3">
      <v-btn color="#b71c1c" class="mt-n5 mr-6 text-center"  dark rounded large to="/reservations">
        <span>View Conference Setups</span>
      </v-btn>
    </v-row>
    <v-row class="grey lighten-3" justify="center">
      <v-col :cols="8" class="my-5">
        <div class="text-h4 pb-5 font-weight-black">Weddings</div>
        <div class="text-h6 my-5">
          For people looking for a place to stay after a wedding, look no further. We offer Discounted rates on wedding blocks and people looking to book the conference center for the reception.
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="grey lighten-3 pb-8">
      <v-col :cols="2"
      ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
      ></v-col>
      <v-col :cols="2"
      ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
      ></v-col>
      <v-col :cols="2"
      ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
      ></v-col>
      <v-col :cols="2"
      ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MeetingsAndEvents"
};
</script>

<style scoped>
.introText {
  color: #7f0000;
}
</style>
