<template>
  <nav-bar />
  <cats-tabs />
  <div v-for="n in 6" :key="n">
    <app-card
      :title="cards[0].title"
      :owner="cards[0].owner"
      :date="cards[0].date"
      :views="cards[0].views"
      :img="cover(cards[0].imgUrl)"
    />
  </div>
  <app-layout> </app-layout>
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
    cover(url: string) {
      if (url !== "") {
        try {
          url = require(url);
        } catch (e) {
          url = "fef";
        }
      } else url = "dd";
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
      cards: [
        {
          title: "Design and Prototype an App with Play - Full 3-hour Course",
          owner: "Designcode",
          views: "14k",
          date: "1 month",
          imgUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dacb81b-fca7-4c16-a479-a904161aff2c/dft0gkv-bdb679fb-63ce-4eb8-b71a-65c9da43f664.jpg/v1/fill/w_1095,h_730,q_70,strp/on_the_bones_of_men_by_evrthedrkai_dft0gkv-pre.jpg",
        },
      ],
    };
  },
});
</script>
