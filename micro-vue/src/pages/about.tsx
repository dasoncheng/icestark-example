import { defineComponent } from "vue";
import { Nav } from "../widgets/nav";

export const About = defineComponent({
  setup() {
    return () => (
      <>
        <h3>Micro About</h3>
        <Nav />
      </>
    );
  },
});
