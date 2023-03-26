<template>
  <!-- <v-container> -->
  <!-- <v-row class="text-center"> -->

  <form class="bg-slate-900 flex items-center">
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="voice-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos, Design Templates..."
        required
      />
      <button
        type="button"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <button
      type="submit"
      class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 mr-2 -ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path></svg
      >Search
    </button>
  </form>

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

  <!-- <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.90069 9.70857C5.96495 9.70857 6.94636 9.3677 7.74934 8.79958L10.77 11.7917C10.9102 11.9306 11.0951 12 11.2926 12C11.7069 12 12 11.6844 12 11.2804C12 11.091 11.9363 10.9079 11.7961 10.7754L8.79448 7.7959C9.42538 6.97528 9.80138 5.95897 9.80138 4.85429C9.80138 2.18411 7.59639 0 4.90069 0C2.21136 0 0 2.1778 0 4.85429C0 7.52446 2.20499 9.70857 4.90069 9.70857ZM4.90069 8.6607C2.79766 8.6607 1.05789 6.9374 1.05789 4.85429C1.05789 2.77117 2.79766 1.04787 4.90069 1.04787C7.00372 1.04787 8.74349 2.77117 8.74349 4.85429C8.74349 6.9374 7.00372 8.6607 4.90069 8.6607Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 11.4062C8.08594 11.4062 9.24219 10.2265 9.24219 8.49216V3.23435C9.24219 1.50779 8.08594 0.32029 6.5 0.32029C4.91406 0.32029 3.75781 1.50779 3.75781 3.23435V8.49216C3.75781 10.2265 4.91406 11.4062 6.5 11.4062ZM0.570312 8.67185C0.570312 11.8828 2.70312 14.0859 5.78906 14.3828V15.9844H2.91406C2.51562 15.9844 2.17969 16.3125 2.17969 16.7187C2.17969 17.1172 2.51562 17.4453 2.91406 17.4453H10.0859C10.4922 17.4453 10.8281 17.1172 10.8281 16.7187C10.8281 16.3125 10.4922 15.9844 10.0859 15.9844H7.21875V14.3828C10.2969 14.0859 12.4375 11.8828 12.4375 8.67185V7.12498C12.4375 6.71873 12.1094 6.39841 11.7031 6.39841C11.2969 6.39841 10.9609 6.71873 10.9609 7.12498V8.61716C10.9609 11.2734 9.16406 13.0312 6.5 13.0312C3.83594 13.0312 2.03906 11.2734 2.03906 8.61716V7.12498C2.03906 6.71873 1.71094 6.39841 1.30469 6.39841C0.898438 6.39841 0.570312 6.71873 0.570312 7.12498V8.67185Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg> -->

  <!-- icons -->
  <!-- <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.40649 22.9668H18.0452C20.3303 22.9668 21.6877 21.6387 21.6877 19.3633V18.1426L25.135 21.0625C25.5159 21.3848 25.9456 21.6094 26.3362 21.6094C27.1565 21.6094 27.7131 21.0039 27.7131 20.125V10.5449C27.7131 9.66602 27.1565 9.07032 26.3362 9.07032C25.9456 9.07032 25.5159 9.28516 25.135 9.6172L21.6877 12.5274V11.2871C21.6877 9.02149 20.3303 7.69337 18.0452 7.69337H8.40649C6.20923 7.69337 4.76392 9.02149 4.76392 11.2871V19.3828C4.76392 21.6582 6.12134 22.9668 8.40649 22.9668ZM8.67993 21.4922C7.18579 21.4922 6.33618 20.7109 6.33618 19.1289V11.5215C6.33618 9.94923 7.18579 9.16798 8.67993 9.16798H17.7717C19.2561 9.16798 20.1155 9.94923 20.1155 11.5215V19.1289C20.1155 20.7109 19.2561 21.4922 17.7717 21.4922H8.67993ZM25.8284 19.7246L21.6877 16.3164V14.3535L25.8284 10.9551C25.9065 10.8867 25.9651 10.8477 26.0432 10.8477C26.1506 10.8477 26.1995 10.9258 26.1995 11.0527V19.6172C26.1995 19.7441 26.1506 19.832 26.0432 19.832C25.9651 19.832 25.9065 19.7832 25.8284 19.7246Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg>

        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.924072 15.3887C0.924072 16.0918 1.47095 16.5606 2.36938 16.5606H6.23657C6.3147 18.3379 7.72095 19.9199 9.7229 19.9199C11.7249 19.9199 13.1311 18.3477 13.219 16.5606H17.0764C17.9749 16.5606 18.5217 16.0918 18.5217 15.3887C18.5217 14.4414 17.594 13.6113 16.7834 12.791C16.1584 12.1563 16.0022 10.8574 15.9143 9.72462C15.8264 6.13087 14.8596 3.78712 12.4182 2.89845C12.0959 1.68751 11.0901 0.740242 9.7229 0.740242C8.35571 0.740242 7.35962 1.68751 7.02759 2.89845C4.58618 3.78712 3.61938 6.13087 3.53149 9.72462C3.45337 10.8574 3.28735 12.1563 2.66235 12.791C1.85181 13.6113 0.924072 14.4414 0.924072 15.3887ZM2.85767 15.0762V14.959C3.05298 14.6953 3.59985 14.168 4.0686 13.6309C4.7229 12.8984 5.0354 11.6582 5.11353 9.8711C5.20142 5.93555 6.38306 4.65626 7.93579 4.23634C8.17017 4.17774 8.29712 4.07032 8.30688 3.82618C8.34595 2.86915 8.88306 2.21485 9.7229 2.21485C10.5627 2.21485 11.1096 2.86915 11.1389 3.82618C11.1584 4.07032 11.2854 4.17774 11.51 4.23634C13.0627 4.65626 14.2444 5.93555 14.3323 9.8711C14.4202 11.6582 14.7229 12.8984 15.3772 13.6309C15.8557 14.168 16.3928 14.6953 16.5784 14.959V15.0762H2.85767ZM7.77954 16.5606H11.676C11.6077 17.7813 10.8167 18.5625 9.7229 18.5625C8.62915 18.5625 7.8479 17.7813 7.77954 16.5606Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg> -->
  <!-- </v-row> -->
  <!-- </v-container> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",

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
