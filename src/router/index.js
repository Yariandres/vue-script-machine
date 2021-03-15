import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/home/Home.vue";
import Creator from "../components/pages/creator/Creator.vue";

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
