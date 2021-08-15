<template>
  <v-footer dark padless class="footer-color">
    <v-container fluid class="footer-color pt-8 text-center">
      <v-row justify="center">
        <v-col class="text-h4 text-uppercase">Red Pine Inn</v-col>
      </v-row>
      <v-row justify="center" class="font-weight-light">
        <v-col>We believe in making your stay in Alliston as<br>Comfortable as can be.</v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-btn class="font-weight-light mb-5" color="#b71c1c" dark rounded to="/contact">
            <span>Contact Us</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col class="text-subtitle-2"><v-icon size="24px" >mdi-copyright</v-icon> 2020 - Red Pine Inn</v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style scoped>
.footer-color {
  background-color: #7f0000;
}
  .footer-text {
    color: #FFF9C4;
  }
</style>
