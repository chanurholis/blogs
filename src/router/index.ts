import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
