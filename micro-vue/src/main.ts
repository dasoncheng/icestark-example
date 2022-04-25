import { type App as Root, createApp } from "vue";
import { App } from "./app";
import { environment } from "./environment";
import { router } from "./routes";
import "./utils/micro";

let app: Root<Element> | null = null;

async function application(container: Element | string) {
  await Promise.resolve();
  app = createApp(App);
  app.use(router);
  app.mount(container);
}

if (!environment.micro.on) {
  application("#app").catch((err) => {
    console.log("#app error", err);
  });
}

export function mount({ container }: { container: Element }) {
  console.log("module-vue: mount");
  application(container).catch((err) => {
    console.log("mount error", err);
  });
}

export function unmount() {
  console.log("module-vue: unmount");
  app?.unmount();
}
