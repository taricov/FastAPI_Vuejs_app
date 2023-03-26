<template>
  <search-bar />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import SearchBar from "../components/SearchBar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    SearchBar,
  },
});
</script>
