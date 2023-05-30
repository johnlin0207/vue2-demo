import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";

const routes = [
  { path: "/home", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
