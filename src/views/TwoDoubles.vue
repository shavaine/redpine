<template>
  <v-container class="homepage py-0" fluid>
    <v-row class="grey lighten-3 py-10" justify="center">
      <v-col :cols="4" align="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="350"></v-img>
        <div class="introText text-h6 mt-4 font-weight-black">
          Two Doubles
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TwoDoubles",
  data: () => ({
    items: [
      {
        src: require("../assets/images/home.jpg")
      },
      {
        src: require("../assets/images/Home2.jpg")
      },
      {
        src: require("../assets/images/Room1.jpg")
      }
    ]
  })
};
</script>

<style scoped>
.introText {
  color: #7f0000;
}
</style>
