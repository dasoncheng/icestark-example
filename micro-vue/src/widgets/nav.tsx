import { defineComponent } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { navigateto } from "../utils/micro";

export const Nav = defineComponent({
  setup() {
    const router = useRouter();
    return () => (
      <>
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <RouterLink to={{ name: "home" }}>Vue Home</RouterLink>
          <RouterLink to={{ name: "about" }}>Vue About</RouterLink>
          <a
            href="javascript:void()"
            onClick={() => {
              navigateto("/dashboard");
            }}
          >
            Application Dashboard
          </a>
        </div>
      </>
    );
  },
});
