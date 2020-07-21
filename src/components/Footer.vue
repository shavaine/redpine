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
    <v-container fluid class="footer-color ">
      <v-row justify="center">
        <v-col :cols="4">Red Pine Inn Alliston</v-col>
        <v-col :cols="4"
          ><v-btn dark icon class="mr-2"
            ><v-icon size="24px">mdi-phone</v-icon></v-btn
          >
          Phone 705-435-4381</v-col
        >
      </v-row>
      <v-row justify="center">
        <v-col :cols="4">497 Victoria St E, Alliston, ON L9R 1T9</v-col>
        <v-col :cols="4"
          ><v-btn dark icon class="mr-2"
            ><v-icon size="24px">mdi-fax</v-icon></v-btn
          >Fax 705-435-4381</v-col
        >
      </v-row>
      <v-row justify="center">
        <v-col :cols="4">Copyright Redpine Inn 2019</v-col>
        <v-col :cols="4"
          ><v-btn dark icon class="mr-2"
            ><v-icon size="24px">mdi-email</v-icon></v-btn
          >Email Reservations@redpineinn.com</v-col
        >
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
</style>
