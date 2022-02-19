import { createRouter, createWebHashHistory } from "vue-router";
import Hierarchy from "@/pages/Hierarchy.vue";

const routes = [
   {
      path: "/",
      component: Hierarchy,
   },
];

const router = createRouter({
   routes,
   history: createWebHashHistory(""),
});

export default router;
