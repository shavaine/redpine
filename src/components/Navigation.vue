<template>
  <nav>
    <v-app-bar app elevation="1" scroll-threshold="500" :color="navcolor">
      <v-app-bar-nav-icon
        :color="tabcolor"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-capitalize white--text">
        <v-img
          src="../assets/images/test3.png"
          alt=""
          max-width="200"
          v-if="navcolor !== '#7f0000'"
          class="mr-4"
        ></v-img>
      </v-toolbar-title>
      <v-button-toggle>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/">Home</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/rooms">Rooms</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/amenities">Amenities</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/meetings">Meetings & Events</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/things">Things To Do</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/contact">Contact</v-btn>
      </v-button-toggle>
      <v-spacer></v-spacer>

      <v-divider class="mx-2" vertical></v-divider>
      <v-btn text :color="tabcolor" to="/reservations">
        <span>Reserve</span>
      </v-btn>
      <v-divider class="mx-2" vertical></v-divider>
      <v-icon right :color="tabcolor">mdi-email</v-icon>
      <v-divider class="mx-4" vertical></v-divider>
      <v-icon right :color="tabcolor" class="mr-4">mdi-phone</v-icon>
      <v-divider vertical></v-divider>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="#7f0000">
      <v-row justify="center">
        <v-img src="../assets/images/test3.png" alt="" max-width="200"> </v-img>
      </v-row>
      <v-list color="#7f0000">
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data: () => ({
    drawer: false,
    scrollPosition: null,
    navcolor: "grey lighten-3",
    tabcolor: "#7f0000",
    links: [
      { icon: "mdi-home-city", text: "Home", route: "/" },
      { icon: "mdi-room-service", text: "Rooms", route: "/rooms" },
      { icon: "mdi-bunk-bed", text: "Amenities", route: "/amenities" },
      {
        icon: "mdi-account-group",
        text: "Meetings & Events",
        route: "/meetings"
      },
      { icon: "mdi-baseball-bat", text: "Things To Do", route: "/things" },
      { icon: "mdi-email", text: "Contact", route: "/contact" },
      { icon: "mdi-notebook", text: "Book Room", route: "/reservations" }
    ]
  }),
  // methods: {
  //   updateScroll() {
  //     this.scrollPosition = window.scrollY;
  //   },
  //   navCurrent() {
  //     if (this.scrollPosition > 200) {
  //       this.navcolor = "grey lighten-3";
  //       this.tabcolor = "#7f0000";
  //     } else {
  //       this.navcolor = "#7f0000";
  //       this.tabcolor = "#FFF9C4";
  //     }
  //   }
  // },
  // mounted() {
  //   window.addEventListener("scroll", this.updateScroll);
  //   window.addEventListener("scroll", this.navCurrent);
  // }
};
</script>

<style scoped></style>
