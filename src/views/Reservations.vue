<template>
  <v-container class="homepage py-0" fluid>
    <!--    Banner-->
    <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
      <v-row
              class="fill-height caro-gradient "
              align="center"
              justify="center"
      >
        <div class="display-2 font-weight-medium white--text"> Reservations</div>
      </v-row>
    </v-row>
    <!--    banner-->

    <v-row>
      <v-container fluid class="footer-color py-8">
        <v-row justify="center">
          <v-col :cols="6">
            <div class="text-h4 amenityText my-3 font-italic text-center mb-8">Reservation Request</div>
            <div class="text-body-1 amenityText my-3">This form is an availability request. It is a non-binding request and no payment is required. You will receive a reply within 24 hours, at which time you will have an opportunity to confirm your booking if the room you have requested is available.</div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row justify="center" class=" grey lighten-1 py-15">
      <v-col :cols="3" class="mr-2">
        <div class="text-h5 my-5">Booking Information</div>
        <ValidationObserver ref="observer" tag="div" class="form">
          <v-form>
            <v-row>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="checkIn" rules="required|max:15">
                  <v-select
                          v-model="checkIn"
                          :error-messages="errors"
                          label="Check-In"
                          required
                          outlined
                          dense
                  ></v-select>
                </ValidationProvider>
              </v-col>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="adults" rules="required|max:8">
                  <v-select
                          v-model="adults"
                          :error-messages="errors"
                          label="Adults"
                          required
                          outlined
                          dense
                  ></v-select>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="checkOut" rules="required|max:15">
                  <v-select
                          v-model="checkOut"
                          :error-messages="errors"
                          label="Check-Out"
                          required
                          outlined
                          dense
                  ></v-select>
                </ValidationProvider>
              </v-col>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="children" rules="required|max:8">
                  <v-select
                          v-model="children"
                          :error-messages="errors"
                          label="Children"
                          required
                          outlined
                          dense
                  ></v-select>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="roomType" rules="required|max:15">
                  <v-select
                          v-model="roomType"
                          :error-messages="errors"
                          label="Room Type"
                          required
                          outlined
                          dense
                  ></v-select>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-btn color="#b71c1c" dark rounded @click="submit">
              <span>Submit Request</span>
            </v-btn>
          </v-form>
        </ValidationObserver>
      </v-col>
      <v-col :cols="3" class="ml-2">
        <div class="text-h5 my-5">Guest Information</div>
        <ValidationObserver ref="observer" tag="div" class="form">
          <v-form>
            <ValidationProvider v-slot="{ errors }" name="firstName" rules="required|max:15">
              <v-text-field
                      v-model="firstName"
                      :error-messages="errors"
                      label="First Name"
                      required
                      outlined
                      dense
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="lastName" rules="required|max:15">
              <v-text-field
                      v-model="lastName"
                      :error-messages="errors"
                      label="Last Name"
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
            <ValidationProvider v-slot="{ errors }" name="address" rules="required|max:15">
              <v-text-field
                      v-model="address"
                      :error-messages="errors"
                      label="Address"
                      required
                      outlined
                      dense
              ></v-text-field>
            </ValidationProvider>
            <v-row>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="city" rules="required|max:15">
                  <v-text-field
                          v-model="city"
                          :error-messages="errors"
                          label="City"
                          required
                          outlined
                          dense
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="postalCode" rules="required|max:8">
                  <v-text-field
                          v-model="postalCode"
                          :error-messages="errors"
                          label="Postal Code"
                          required
                          outlined
                          dense
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <ValidationProvider v-slot="{ errors }" name="country" rules="required|max:15">
              <v-text-field
                      v-model="country"
                      :error-messages="errors"
                      label="Country"
                      required
                      outlined
                      dense
              ></v-text-field>
            </ValidationProvider>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { required, email, max, digits } from "vee-validate/dist/rules";
  import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from "vee-validate";

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
  name: "Reservations",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
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
  .footer-color {
    background-color: #7f0000;
  }
  .amenityText {
    color: #fff9c4;
  }
  .form {
    width: 100%;
  }
</style>
