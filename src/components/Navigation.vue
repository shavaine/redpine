<template>
  <nav>
    <v-app-bar app elevation="1" scroll-threshold="500" :color="navcolor">
        <router-link to="/">
          <v-img
                src="../assets/images/MainLogo.png"
                alt="Red Pine Inn"
                max-width="200"
                class="mr-4"
        ></v-img>
        </router-link>
      <div class="d-none d-lg-flex d-xl-flex">
        <v-btn text :color="tabcolor" class="text-capitalize" to="/">Home</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/rooms">Rooms</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/amenities">Amenities</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/meetings">Meetings & Events</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/things">Things To Do</v-btn>
        <v-btn text :color="tabcolor" class="text-capitalize" to="/contact">Contact</v-btn>
      </div>
      <v-spacer></v-spacer>

      <v-divider class="mx-2 d-none d-lg-flex d-xl-flex" vertical></v-divider>
      <v-btn class="d-none d-lg-flex d-xl-flex" text :color="tabcolor" to="/reservations">
        <span>Reserve</span>
      </v-btn>

      <v-divider v-if="mobileM" class="mx-2" vertical></v-divider>
      <v-tooltip v-if="mobileM" bottom>
        <template v-slot:activator="{ on, attrs }">
          <a href="mailto: reservations@redpineinn.com" >
          <v-icon v-bind="attrs" v-on="on" right :color="tabcolor">mdi-email</v-icon>
          </a>
        </template>
        <span>Email Red Pine Inn</span>
      </v-tooltip>


      <v-divider v-if="mobileS" class="mx-4 d-flex d-xl-none d-lg-none" vertical></v-divider>
      <v-tooltip v-if="mobileS" bottom>
        <template  v-slot:activator="{ on, attrs }">
          <a href="tel:7054354381" class="d-flex d-xl-none d-lg-none">
          <v-icon v-bind="attrs" v-on="on" right :color="tabcolor" class="mr-4">mdi-phone</v-icon>
          </a>
        </template>
        <span>Call Red Pine Inn</span>
      </v-tooltip>
      <v-divider vertical class="d-flex d-xl-none d-lg-none"></v-divider>
      <v-app-bar-nav-icon
              :color="tabcolor"
              @click="drawer = !drawer"
              class="d-flex d-xl-none d-lg-none"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app right color="#7f0000">
      <v-row justify="center">
        <v-img src="../assets/images/MainLogo.png" alt="" max-width="200"> </v-img>
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
      <v-row justify="center">
        <v-btn outlined dark @click="drawer = !drawer">Close Menu</v-btn>
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data: () => ({
    drawer: false,
    navcolor: "grey lighten-3",
    tabcolor: "#7f0000",
    windowWidth: window.innerWidth,
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
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    mobileS() {
      return this.windowWidth >= 321
    },
    mobileM() {
      return this.windowWidth >= 415
    }
  }
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
