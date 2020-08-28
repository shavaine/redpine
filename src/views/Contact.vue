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
    <v-row>
      <ValidationObserver ref="observer" >
        <form>
          <ValidationProvider v-slot="{ errors }" name="FirstName" rules="required|max:10">
            <v-text-field
              v-model="firstName"
              :error-messages="errors"
              label="First Name"
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="LastName" rules="required|max:10">
            <v-text-field
                    v-model="lastName"
                    :error-messages="errors"
                    label="Last Name"
                    required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="phone" rules="required|digits:10">
            <v-text-field
                    v-model="phone"
                    :error-messages="errors"
                    label="Phone #"
                    required
            ></v-text-field>
          </ValidationProvider>

          <v-btn class="mr-4" @click="submit">submit</v-btn>
        </form>
      </ValidationObserver>
    </v-row>
  </v-container>
</template>

<script>
import { required, email, max, digits } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

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
    ValidationObserver
  },
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      console.log(this.firstName, this.lastName, this.email, this.phone);
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phone = "";
      this.$refs.observer.reset();
    }
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
</style>
