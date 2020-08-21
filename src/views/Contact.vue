<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">Contact</div>
      </v-col>
    </v-row>
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
.introText {
  color: #7f0000;
}
</style>
