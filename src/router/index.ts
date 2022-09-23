import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: () => import("@/views/public/MainView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/public/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/public/RegisterView.vue"),
    },
    {
      path: "/admin/dashboard",
      name: "dashboard",
      component: () => import("@/views/admin/DashboardView.vue"),
    },
    {
      path: "/admin/blog",
      name: "admin-blog",
      component: () => import("@/views/admin/BlogView.vue"),
    },
  ],
});

export default router;
