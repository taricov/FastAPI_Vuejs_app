<script lang="ts" setup>
import { defineProps } from "vue";

// export default defineComponent({
// name: "ListItem,
// })
const props = defineProps({
  itemIcon: String,
  itemLabel: String,
});

// const { itemIcon, itemLabel } = toRef(props);
</script>

<template>
  <v-list-item link class="">
    <v-list-item-icon>
      <v-icon>{{ props.itemIcon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ props.itemLabel }}</v-list-item-title>
  </v-list-item>
</template>
