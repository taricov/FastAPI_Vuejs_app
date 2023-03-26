<template>
  <form @submit.prevent="something" class="max-w-md px-4 mx-auto mt-12">
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="text"
        placeholder="Explore"
        class="rounded-full w-full py-3 pl-12 pr-4 text-gray-500 border outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 transition-all duration-200"
      />

      <span
        class="cursor-pointer flex items-center justify-center absolute top-0 bottom-0 w-8 h-8 border-2 border-slate-600 my-auto text-gray-400 right-3 bg-slate-300 rounded-full"
      >
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          class="relative"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 11.4062C8.08594 11.4062 9.24219 10.2265 9.24219 8.49216V3.23435C9.24219 1.50779 8.08594 0.32029 6.5 0.32029C4.91406 0.32029 3.75781 1.50779 3.75781 3.23435V8.49216C3.75781 10.2265 4.91406 11.4062 6.5 11.4062ZM0.570312 8.67185C0.570312 11.8828 2.70312 14.0859 5.78906 14.3828V15.9844H2.91406C2.51562 15.9844 2.17969 16.3125 2.17969 16.7187C2.17969 17.1172 2.51562 17.4453 2.91406 17.4453H10.0859C10.4922 17.4453 10.8281 17.1172 10.8281 16.7187C10.8281 16.3125 10.4922 15.9844 10.0859 15.9844H7.21875V14.3828C10.2969 14.0859 12.4375 11.8828 12.4375 8.67185V7.12498C12.4375 6.71873 12.1094 6.39841 11.7031 6.39841C11.2969 6.39841 10.9609 6.71873 10.9609 7.12498V8.61716C10.9609 11.2734 9.16406 13.0312 6.5 13.0312C3.83594 13.0312 2.03906 11.2734 2.03906 8.61716V7.12498C2.03906 6.71873 1.71094 6.39841 1.30469 6.39841C0.898438 6.39841 0.570312 6.71873 0.570312 7.12498V8.67185Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg>
      </span>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",

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
