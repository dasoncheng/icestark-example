import { defineComponent } from "vue";
import { Nav } from "../widgets/nav";

export const Home = defineComponent({
  setup() {
    return () => (
      <>
        <h3>Micro Home</h3>
        <Nav />
      </>
    );
  },
});
