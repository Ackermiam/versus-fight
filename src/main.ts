import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

createApp(App)
  .use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    },
  })
  .mount("#app");
