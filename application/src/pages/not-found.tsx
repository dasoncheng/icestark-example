import { defineComponent } from "vue";

export const NotFound = defineComponent({
  setup() {
    return () => (
      <>
        <p>Not Found</p>
      </>
    );
  },
});
