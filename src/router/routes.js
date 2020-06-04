const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/about", component: () => import("pages/about/About.vue") },
      {
        path: "/diary",
        component: () => import("pages/diary/DiaryList.vue")
      },
      { path: "/write", component: () => import("pages/Write.vue") },
      {
        path: "/view/:bdNum",
        // path: "/view",
        component: () => import("pages/View.vue")
      },
      {
        path: "/modify/blabla/:bdNum",
        component: () => import("pages/Modify.vue")
      },
      { path: "/shop", component: () => import("pages/shopping/Shopping.vue") },
      {
        path: "/free",
        component: () => import("pages/freeboard/FreeBoard.vue")
      },
      { path: "/cho", component: () => import("pages/cho/Cho.vue") },
      { path: "/join", component: () => import("pages/member/MemberJoin.vue") },
      {
        path: "/login",
        component: () => import("pages/member/MemberLogin.vue")
      }
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
