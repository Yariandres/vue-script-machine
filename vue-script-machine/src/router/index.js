import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Creator from "../views/Creator.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/creator",
    name: "Creator",
    component: Creator
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
