import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Products from "../views/Products.vue";
import PastOrders from "../views/PastOrders.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/past-orders",
      name: "past-orders",
      component: PastOrders,
    },
  ],
});

export default router;
