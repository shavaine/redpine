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
          <v-col :lg="6" :md="8" :sm="10" :cols="10">
            <div class="text-h4 amenityText my-3 font-italic text-center mb-8">Reservation Request</div>
            <div class="text-body-1 amenityText my-3">This form is an availability request. It is a non-binding request and no payment is required. You will receive a reply within 24 hours, at which time you will have an opportunity to confirm your booking if the room you have requested is available.</div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row justify="center" class=" grey lighten-1 py-15">
      <v-col :lg="3" :md="4" :sm="5" :cols="10" class="mr-sm-2">
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
            <ValidationProvider v-slot="{ errors }" name="address" rules="required|max:30">
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
      <v-col :lg="3" :md="4" :sm="5" :cols="10" class="ml-sm-2">
        <div class="text-h5 my-5">Booking Information</div>
        <ValidationObserver ref="observer" tag="div" class="form">
          <v-form>
            <v-row>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="checkIn" rules="required|max:15">
                  <v-menu
                          v-model="checkIn"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :error-messages="errors"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                              v-model="checkInDate"
                              label="Check-In"
                              readonly
                              outlined
                              dense
                              v-bind="attrs"
                              v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="checkInDate" @input="checkIn = false"></v-date-picker>
                  </v-menu>
                </ValidationProvider>
              </v-col>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="adults" rules="required|max:8">
                  <v-select
                          v-model="adults"
                          :error-messages="errors"
                          :items="numbersA"
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
                  <v-menu
                          v-model="checkOut"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :error-messages="errors"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                              v-model="checkOutDate"
                              label="Check-Out"
                              readonly
                              outlined
                              dense
                              v-bind="attrs"
                              v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="checkOutDate" @input="checkOut = false"></v-date-picker>
                  </v-menu>
                </ValidationProvider>
              </v-col>
              <v-col :cols="6" class="py-0">
                <ValidationProvider v-slot="{ errors }" name="children" rules="required|max:8">
                  <v-select
                          v-model="children"
                          :error-messages="errors"
                          :items="numbersC"
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
                          :items="roomTypes"
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
    </v-row>
  </v-container>
</template>

<script>
  import { required, email, max, digits } from "vee-validate/dist/rules";
  import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from "vee-validate";
  import db from "../db";
  import Firebase from "firebase";

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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    checkIn: false,
    checkInDate: new Date().toISOString().substr(0, 10),
    checkOut: false,
    checkOutDate: new Date().toISOString().substr(0, 10),
    adults: "",
    children: "",
    roomType: "",
    numbersA: ['1', '2', '3', '4'],
    numbersC: ['0','1', '2', '3', '4'],
    roomTypes: ['One Double', 'Two Queens', 'Kitchenette']

  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      console.log(this.firstName, this.lastName, this.email, this.phone, this.address, this.city, this.postalCode, this.country, this.checkInDate, this.checkOutDate, this.adults, this.children, this.roomType);
      db.collection("reservations").add({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        postalCode: this.postalCode,
        country: this.country,
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        adults: this.adults,
        children: this.children,
        roomType: this.roomType,
        status: "Not-Contacted",
        createdAt: Firebase.firestore.FieldValue.serverTimestamp()
      })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phone = "";
      this.address = "";
      this.city = "";
      this.postalCode = "";
      this.country = "";
      this.checkInDate = "";
      this.checkOutDate = "";
      this.adults = false;
      this.children = false;
      this.roomType = false;
      this.$refs.observer.reset();

      alert("Your Reservation Request has been sent");
      this.$router.push("home")
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
