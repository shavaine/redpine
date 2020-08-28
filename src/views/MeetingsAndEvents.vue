<template>
  <v-container class="homepage py-0" fluid>
    <!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text"> Meetings & Events</div>
      </v-row>
    </v-row>
    <!--    banner-->

    <v-row class="grey lighten-1" justify="center">
      <!--    Conferences-->
      <v-col :cols="8" class="my-5">
      <v-card class="grey mt-9">
        <v-row justify="center">
          <v-col :cols="11" >
            <div class="text-h4 pb-5 font-weight-light text-center mt-4">Conferences</div>
            <div class="text-h6  my-3">
              Situated in Alliston, our on-site banquet, conference and reception
              centre offers you the opportunity to make your next business meeting,
              conference or banquet a big success! we serve all of New Tecumseth's
              communities and can provide for up to 100 people.
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="px-13 pb-13">
          <v-col :cols="3"
          ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
          ></v-col>
          <v-col :cols="3"
          ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
          ></v-col>
          <v-col :cols="3"
          ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
          ></v-col>
          <v-col :cols="3"
          ><v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img
          ></v-col>
        </v-row>
        <v-row justify="center">
          <v-col :cols="11">
            <div class="text-h6 pb-9 ">
              Formal or informal setup for banquets or business meetings in class room, theatre or horseshoe setup format is available.
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" >
          <v-btn color="#b71c1c" class="mb-n5 mr-6 text-center"  dark rounded large to="/reservations">
            <span>View Conference Setups</span>
          </v-btn>
        </v-row>
      </v-card>
      </v-col>
      <!--    Conferences-->
      <!--      Weddings-->
      <v-col :cols="8" class="my-5">
        <v-card class="grey lighten-2 mb-12">
          <v-row justify="center">
            <v-col :cols="11" >
              <div class="text-h4 pb-5 font-weight-light text-center mt-4">Weddings</div>
              <div class="text-h6 my-3">
                For people looking for a place to stay after a wedding, look no further. We offer Discounted rates on wedding blocks and people looking to book the conference center for the reception.
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" class="px-13 pb-13" >
            <v-col :cols="3"
            ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
            ></v-col>
            <v-col :cols="3"
            ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
            ></v-col>
            <v-col :cols="3"
            ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
            ></v-col>
            <v-col :cols="3"
            ><v-img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></v-img
            ></v-col>
          </v-row>
          <v-row justify="center" >
            <v-btn color="#b71c1c" class="mb-n5 mr-6 text-center"  dark rounded large to="/contact">
              <span>Contact For More Info</span>
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <!--      Weddings-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MeetingsAndEvents"
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
