import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Homepage.vue"),
    meta: { title: "Doctor 6 | Home" },
  },
  {
    path: "/biography",
    name: "biography",
    component: () => import("./views/Biography.vue"),
    meta: { title: "Doctor 6 | Biography" },
  },
  {
    path: "/music",
    name: "music",
    component: () => import("./views/Music.vue"),
    meta: { title: "Doctor 6 | Music" },
  },
  {
    path: "/services",
    name: "services",
    component: () => import("./views/Services.vue"), // <-- ACÁ pusiste la S mayúscula
    meta: { title: "Doctor 6 | Services" },
  }
];
