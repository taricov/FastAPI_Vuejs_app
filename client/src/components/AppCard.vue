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
    class="text-white md:mx-3 shadow-none my-12 rounded-xl bg-gradient-to-b bg-transparent from-_darkest to-transparent"
    max-width="374"
  >
    <v-img
      cover
      height="250"
      src="https://cdna.artstation.com/p/assets/images/images/033/217/864/large/taric-ov-maskedboy.jpg?1608785841"
    ></v-img>

    <v-card-item class="pb-2">
      <v-card-title class="text-[18px] overflow-auto whitespace-normal">{{
        title
      }}</v-card-title>

      <v-card-subtitle class="mt-5">
        <span class="opacity-30 uppercase font-semibold">{{ owner }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="text-xs text-slate-300">
        {{ views }} views - {{ date }} ago
      </div>
    </v-card-text>
  </v-card>
</template>
