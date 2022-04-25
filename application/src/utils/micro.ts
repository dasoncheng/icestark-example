import start from "@ice/stark/lib/start";
import { registerMicroApps, removeMicroApps } from "@ice/stark/lib/apps";

export function MicroAppsMount(props: {
  container: HTMLElement;
  update: (active: boolean) => void;
}) {
  registerMicroApps([
    {
      name: "micro-angular",
      activePath: "/module-b",
      container: props.container,
      entry: "http://localhost:3001",
    },
    {
      name: "micro-vue",
      activePath: "/module-a",
      container: props.container,
      url: ["/module-a/micro-vue.umd.js"],
    },
  ]);

  start({
    onLoadingApp: () => {
      console.log("onLoadingApp");
    },
    onFinishLoading: () => {
      console.log("onFinishLoading");
    },
    onRouteChange: (_, pathname, query, hash) => {
      console.log("onRouteChange", { pathname, query, hash });
      // router.push(pathname).catch(() => {
      // });
    },
    onActiveApps: (apps) => {
      console.log("onActiveApps", apps);
      props.update(Boolean((apps || []).length));
    },
  });
}

export function MicroAppsUnMount() {
  removeMicroApps([
    // "micro-angular",
    "micro-vue",
  ]);
}
