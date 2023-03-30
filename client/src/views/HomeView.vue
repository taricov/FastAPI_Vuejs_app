<template>
  <nav-bar />
  <cats-tabs />

  <app-layout>
    <v-row no-gutters class="mt-4 w-3/4 float-right">
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        sm="4"
        class="flex items-center justify-center"
      >
        <app-card
          :title="cards[0].title"
          :owner="cards[0].owner"
          :date="cards[0].date"
          :views="cards[0].views"
          :img="cards[0].imgUrl"
        />
      </v-col>
    </v-row>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import NavBar from "../components/NavBar.vue";
import CatsTabs from "../components/CatsTabs.vue";
import AppLayout from "../layouts/AppLayout.vue";
import AppCard from "../components/AppCard.vue";

export default defineComponent({
  name: "HomeView",
  methods: {
    loadImg(url: string) {
      return url;
    },
  },
  components: {
    NavBar,
    CatsTabs,
    AppLayout,
    AppCard,
  },
  data() {
    return {
      imgurlval: "",
      cards: [
        {
          title: "Design and Prototype an App with Play - Full 3-hour Course",
          owner: "Designcode",
          views: "14k",
          date: "1 month",
          imgUrl:
            "https://cdna.artstation.com/p/assets/images/images/033/217/864/large/taric-ov-maskedboy.jpg?1608785841",
        },
      ],
    };
  },
});
</script>
