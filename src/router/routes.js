const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/diary", component: () => import("pages/DiaryList.vue") },
      { path: "/shop", component: () => import("pages/Shopping.vue") },
      { path: "/free", component: () => import("pages/FreeBoard.vue") },
      { path: "/cho", component: () => import("pages/Cho.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
