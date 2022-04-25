import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { environment } from "./environment";
import { NotFound } from "./utils/micro";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { NotFound as NF } from "./pages/not-found";

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => (environment.micro.on ? NotFound() : NF),
  },
];

const router = createRouter({
  history: createWebHistory(environment.micro.on ? environment.micro.base : import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export { router };
