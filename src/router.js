import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import HomePage from "./components/HomePage.vue";
import ServiceUs from "./components/ServiceUs.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUp,
  },
  { 
    path: "/login", 
    name: "Login", 
    component: Login 
  },
  {
    path: "/service",
    name: "Service",
    component: ServiceUs,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
createRouter(history: createWebHistory()
routes,)

*/
