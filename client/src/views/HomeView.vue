<template>
  <nav-bar />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
  },
});
</script>
