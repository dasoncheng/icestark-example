import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./layout").then((m) => m.Layout),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("./pages/dashboard").then((m) => m.Dashboard),
      },
      {
        path: "example",
        name: "example",
        component: () => import("./pages/example").then((m) => m.Example),
      },
      {
        path: ":pathMatch(.*)*",
        name: "not-found",
        component: () => import("./pages/not-found").then((m) => m.NotFound),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export { router };
