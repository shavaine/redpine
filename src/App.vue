<template>
  <v-app class="">
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
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
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Red Pine Inn'
    }
  },
};
</script>

<style>
/*body {*/
/*  background-color: #52050a;*/
/*  !*background-color: #621708;*!*/
/*}*/
</style>
