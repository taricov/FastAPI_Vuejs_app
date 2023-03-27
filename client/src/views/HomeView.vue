<template>
  <nav-bar />
  <cats-tabs />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import NavBar from "../components/NavBar.vue";
import CatsTabs from "../components/CatsTabs.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    CatsTabs,
  },
});
</script>
