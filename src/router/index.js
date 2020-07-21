import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rooms from "../views/Rooms";
import Amenities from "../views/Amenities";
import MeetingsAndEvents from "../views/MeetingsAndEvents";
import ThingsToDo from "../views/ThingsToDo";
import Contact from "../views/Contact";
import Bookings from "../views/Bookings";
import Reservations from "../views/Reservations";
import TwoQueens from "../views/TwoQueens";
import TwoDoubles from "../views/TwoDoubles";
import Kitchenette from "../views/Kitchenette";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms
  },
  {
    path: "/amenities",
    name: "Amenities",
    component: Amenities
  },
  {
    path: "/meetings",
    name: "Meetings",
    component: MeetingsAndEvents
  },
  {
    path: "/things",
    name: "ThingsToDo",
    component: ThingsToDo
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/bookings",
    name: "Bookings",
    component: Bookings
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: Reservations
  },
  {
    path: "/queens",
    name: "TwoQueens",
    component: TwoQueens
  },
  {
    path: "/doubles",
    name: "TwoDoubles",
    component: TwoDoubles
  },
  {
    path: "/kitchenette",
    name: "Kitchenette",
    component: Kitchenette
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
});

export default router;
