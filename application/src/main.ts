import { createApp } from "vue";
import { App } from "./app";
import { router } from "./routes";

async function application() {
  await Promise.resolve();
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
}

application();
