<template>
  <v-footer dark padless class="footer-color">
    <!--    <v-card class="flex" flat tile>-->
    <!--      <v-card-title class="footer-color">-->
    <!--        <strong class="subheading"-->
    <!--          >Get connected with us on social networks!</strong-->
    <!--        >-->

    <!--        <v-spacer></v-spacer>-->

    <!--        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>-->
    <!--          <v-icon size="24px">{{ icon }}</v-icon>-->
    <!--        </v-btn>-->
    <!--      </v-card-title>-->
    <!--    </v-card>-->

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

<!--    <v-container fluid class="footer-color py-8">-->
<!--      <v-row fluid class="text-center">-->
<!--        <div>Red Pine Inn</div>-->
<!--        <div>We believe in making your stay in Alliston As<br> Comfortable as can be</div>-->
<!--      </v-row>-->
<!--      <v-row>-->
<!--        <v-btn color="#b71c1c" class=" text-center"  dark rounded large to="/reservations">-->
<!--          <span>View Conference Setups</span>-->
<!--        </v-btn>-->
<!--      </v-row>-->
<!--    </v-container>-->
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
