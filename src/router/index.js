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
import Login from "../views/Login";
import Admin from "../views/Admin";
import Firebase from "firebase/app";
import 'firebase/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home - Red Pine Inn'
    }
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
    meta: {
      title: 'Rooms - Red Pine Inn'
    }
  },
  {
    path: "/amenities",
    name: "Amenities",
    component: Amenities,
    meta: {
      title: 'Amenities - Red Pine Inn'
    }
  },
  {
    path: "/meetings",
    name: "Meetings",
    component: MeetingsAndEvents,
    meta: {
      title: 'Meetings - Red Pine Inn'
    }
  },
  {
    path: "/things",
    name: "ThingsToDo",
    component: ThingsToDo,
    meta: {
      title: 'Things To Do - Red Pine Inn'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'Contact - Red Pine Inn'
    }
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: Reservations,
    meta: {
      title: 'Reservations - Red Pine Inn'
    }
  },
  {
    path: "/queens",
    name: "TwoQueens",
    component: TwoQueens,
    meta: {
      title: 'Queens - Red Pine Inn'
    }
  },
  {
    path: "/double",
    name: "OneDoubles",
    component: OneDouble,
    meta: {
      title: 'Double - Red Pine Inn'
    }
  },
  {
    path: "/kitchenette",
    name: "Kitchenette",
    component: Kitchenette,
    meta: {
      title: 'Kitchenette - Red Pine Inn'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login - Red Pine Inn'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: 'Admin - Red Pine Inn',
      requiresAuth: true
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
  // const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = Firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("login")
  } else {
    next();
  }
  // if (requiresAuth && !currentUser){
  //   next('login');
  // }else{
  //   next();
  // }
});

export default router;
