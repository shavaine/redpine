<template>
  <v-container class="homepage py-0" fluid>
    <!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text"> Contact</div>
      </v-row>
    </v-row>
    <!--    banner-->

    <v-row class="grey lighten-1 py-16" justify="center">
      <v-col class="mr-10" :cols="5">
        <v-row>
          <l-map style="height: 700px" :zoom="zoom" :center="center" class="behind">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng" ></l-marker>
          </l-map>
        </v-row>
      </v-col>
      <v-col class="ml-10" :cols="3">
        <v-row>
          <div class="mb-6">
            <span class="text-h6">Contact Information</span>
            <br>
            <span>Phone: 705-435-4381</span>
            <br>
            <span>Fax: 705-435-4381</span>
            <br>
            <span>Email: Reservations@redpineinn.com</span>
            <br>
            <span>Address: 497 Victoria St E, Alliston, ON L9R 1T9</span>
          </div>

        </v-row>
        <v-row>
          <div class="mb-6">
            <span class="text-h6">Send Us A Message</span>
            <br>
            <span>Complete this form and we will try to get back to you as soon as possible.</span>
            <br>
            <span>Thank You.</span>
          </div>
          <ValidationObserver ref="observer" tag="div" class="form">
            <v-form>
              <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:15">
                <v-text-field
                        v-model="name"
                        :error-messages="errors"
                        label="Name"
                        required
                        outlined
                        dense
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                <v-text-field
                        v-model="email"
                        :error-messages="errors"
                        label="E-mail"
                        required
                        outlined
                        dense
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="phone" rules="required|digits:10">
                <v-text-field
                        v-model="phone"
                        :error-messages="errors"
                        label="Phone #"
                        required
                        outlined
                        dense
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="Message" rules="required|max:50">
                <v-textarea
                        v-model="message"
                        :error-messages="errors"
                        label="Message"
                        required
                        outlined
                        counter="50"
                ></v-textarea>
              </ValidationProvider>
              <v-btn color="#b71c1c" class="text-center" dark rounded @click="submit">
                <span>Send Message</span>
              </v-btn>
            </v-form>
          </ValidationObserver>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, email, max, digits } from "vee-validate/dist/rules";
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from "vee-validate";

import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

extend("digits", {
  ...digits,
  message: "Phone number must be 10 digits"
});

export default {
  name: "contact",
  components: {
    ValidationProvider,
    ValidationObserver,
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 17,
    center: [44.158666, -79.843857],
    markerLatLng: [44.158666, -79.843857]
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      console.log(this.name, this.email, this.phone, this.message);
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.$refs.observer.reset();
    },
  }
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
  .form {
    width: 100%;
  }
  .behind {
    z-index: 1;
  }
</style>
