import { defineComponent, onMounted, onUnmounted, reactive, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MicroAppsMount, MicroAppsUnMount } from "./utils/micro";

export const App = defineComponent({
  setup() {
    const container = ref<HTMLDivElement>(document.createElement("div"));
    const data = reactive<{
      loading: boolean;
      micro: boolean;
    }>({
      loading: false,
      micro: false,
    });

    onMounted(() => {
      console.log("onMounted");
      MicroAppsMount({
        container: container.value,
        update: (value) => {
          data.micro = value;
        },
      });
    });
    onUnmounted(() => {
      console.log("onUnmounted");
      MicroAppsUnMount();
    });
    return () => (
      <>
        <header
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <RouterLink to={{ name: "dashboard" }}>Dashboard</RouterLink>
          <RouterLink to={{ name: "example" }}>Example</RouterLink>
          <RouterLink to="/module-angular/resident">Micro Angular</RouterLink>
          <RouterLink to="/module-vue/home">Micro Vue</RouterLink>
        </header>
        <section>
          <div ref={container}></div>
          <div v-show={!data.micro}>
            <RouterView />
          </div>
        </section>
      </>
    );
  },
});
