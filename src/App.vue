<template>
  <v-app class="">
    <Navigation />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
};
</script>

<style>
/*body {*/
/*  background-color: #52050a;*/
/*  !*background-color: #621708;*!*/
/*}*/
</style>
