<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCard",
  props: ["img", "title", "owner", "date", "views"],
  data() {
    return {
      loading: false,
      selection: 1,
    };
  },
});
</script>
<template>
  <v-card
    :loading="loading"
    class="shadow-none mx-auto my-12 rounded-xl bg-gradient-to-b bg-transparent from-_darkest to-transparent"
    max-width="374"
  >
    <v-img cover height="250" src="img"></v-img>

    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1 opacity-50">{{ owner }}</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">{{ views }} views - {{ date }} ago</div>
    </v-card-text>
  </v-card>
</template>
