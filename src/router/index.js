import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rooms from "../views/Rooms";
import Amenities from "../views/Amenities";
import MeetingsAndEvents from "../views/MeetingsAndEvents";
import ThingsToDo from "../views/ThingsToDo";
import Contact from "../views/Contact";
import Reservations from "../views/Reservations";
import TwoQueens from "../views/TwoQueens";
import OneDouble from "../views/OneDouble";
import Kitchenette from "../views/Kitchenette";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
      title: 'Home - Red Pine Inn'
    }
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
    meta: {
      auth: true,
      title: 'Rooms - Red Pine Inn'
    }
  },
  {
    path: "/amenities",
    name: "Amenities",
    component: Amenities,
    meta: {
      auth: true,
      title: 'Amenities - Red Pine Inn'
    }
  },
  {
    path: "/meetings",
    name: "Meetings",
    component: MeetingsAndEvents,
    meta: {
      auth: true,
      title: 'Meetings - Red Pine Inn'
    }
  },
  {
    path: "/things",
    name: "ThingsToDo",
    component: ThingsToDo,
    meta: {
      auth: true,
      title: 'Things To Do - Red Pine Inn'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      auth: true,
      title: 'Contact - Red Pine Inn'
    }
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: Reservations,
    meta: {
      auth: true,
      title: 'Reservations - Red Pine Inn'
    }
  },
  {
    path: "/queens",
    name: "TwoQueens",
    component: TwoQueens,
    meta: {
      auth: true,
      title: 'Queens - Red Pine Inn'
    }
  },
  {
    path: "/double",
    name: "OneDoubles",
    component: OneDouble,
    meta: {
      auth: true,
      title: 'Double - Red Pine Inn'
    }
  },
  {
    path: "/kitchenette",
    name: "Kitchenette",
    component: Kitchenette,
    meta: {
      auth: true,
      title: 'Kitchenette - Red Pine Inn'
    }
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
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
