<template>
  <nav-bar />
  <cats-tabs />
  <app-layout> </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import NavBar from "../components/NavBar.vue";
import CatsTabs from "../components/CatsTabs.vue";
import AppLayout from "../layouts/AppLayout.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    CatsTabs,
    AppLayout,
  },
});
</script>
