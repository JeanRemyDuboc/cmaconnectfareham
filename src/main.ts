import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createGtm } from '@gtm-support/vue-gtm'
import "./index.css"

const app = createApp(App);
router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  if(typeof to.name === "string"){
    const title = to.name
    // If the route has a title, set it as the page title of the document/page
    if (title) {
      document.title =  title + " - CMA Connect Fareham"
    }
  }
  // Continue resolving the route
  next()
})

app.use(router)
app.use(
  createGtm({
    id: "GTM-T9B8X3J",
    vueRouter: router
  })
)
app.mount("#app");
