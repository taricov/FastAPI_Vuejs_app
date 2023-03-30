<template>
  <v-card class="mx-5 pt-5 shadow-bar-shadow bg-transparent">
    <v-tabs class="inner__shadow text-white capitalize" center-active>
      <v-tab>All</v-tab>
      <v-tab>Gaming</v-tab>
      <v-tab>Thoughts</v-tab>
      <v-tab>Music</v-tab>
      <v-tab>Thrillers</v-tab>
      <v-tab>Mixes</v-tab>
      <v-tab>Avatar</v-tab>
      <v-tab>Film Criticism</v-tab>
      <v-tab>Korean Drama</v-tab>
      <v-tab>Eating</v-tab>
      <v-tab>Charcter</v-tab>
      <v-tab>Horror</v-tab>
      <v-tab>Action</v-tab>
      <v-tab>Sexual</v-tab>
      <v-tab>Upcoming</v-tab>
      <v-tab>Italian Drama</v-tab>
      <v-tab>Mystery</v-tab>
      <v-tab>In Theatre</v-tab>
      <v-tab>Office Box</v-tab>
      <v-tab>Spanish</v-tab>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CatsTabs",

  data() {
    return {};
  },
  methods: {
    something() {
      console.log("something");
    },
  },
});
</script>
