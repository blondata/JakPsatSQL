import Vue from "vue"
import Router from "vue-router"

import Home from "./components/Home"
import Theory from "./components/Theory"
import Database from "./components/Database"
import Relations from "./components/Relations"
import Practice from "./components/Practice"
import Tips from "./components/Tips"
import About from "./components/About"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/home",
      meta: { title: "Bylo nebylo", icon: "home" },
      name: "Home",
      component: Home,
    },
    {
      path: "/teorie",
      meta: { title: "Teorie", icon: "language" },
      name: "Theory",
      component: Theory,
    },
    {
      path: "/servery",
      meta: { title: "Databázový server a databáze", icon: "computer" },
      name: "Database",
      component: Database,
    },
    {
      path: "/relace",
      meta: { title: "Fungující vztahy - relace", icon: "sync" },
      name: "Relations",
      component: Relations,
    },
    {
      path: "/tips",
      meta: { title: "Užitečné", icon: "help" },
      name: "Tips",
      component: Tips,
    },
    {
      path: "/practice",
      meta: { title: "Výuka", icon: "school" },
      name: "Practice",
      component: Practice,
    },
    {
      path: "/about",
      meta: { title: "Autoři stránek", icon: "360" },
      name: "About",
      component: About,
    },
    {
      path: "*",
      redirect: "/home",
      meta: { title: "all", icon: "help", hideInMenu: true }
    }  
  ],
})

export default router
