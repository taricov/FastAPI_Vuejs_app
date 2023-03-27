<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 w-full">
    <div class="w-full container flex items-center flex-wrap space-x-0 m-0">
      <!-- <SearchBar /> -->
      <div class="flex items-center md:order-2 w-fit">
        <button
          type="button"
          class="m-auto flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="pt-2 flex items-center justify-center">
            <span
              class="pt-[.5] text-xl w-8 h-8 text-white rounded-full bg-[#22D7FF]"
              >A</span
            >
          </span>
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >John Doe</span
            >
            <span
              class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
              >example@gmail.com</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Profile</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Favorites</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="flex-1 m-0 items-center flex justify-between md:flex md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col pl-4 mt-4 rounded-lg md:flex-row items-center justify-center md:flex-grow md:mt-0 md:text-sm md:font-medium"
        >
          <li class="flex-1 pr-10">
            <SearchBar />
          </li>

          <li class="px-2 flex items-center justify-center">
            <a
              href="#"
              class="block mb-2 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <svg
                width="28"
                viewBox="0 0 28 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.40649 22.9668H18.0452C20.3303 22.9668 21.6877 21.6387 21.6877 19.3633V18.1426L25.135 21.0625C25.5159 21.3848 25.9456 21.6094 26.3362 21.6094C27.1565 21.6094 27.7131 21.0039 27.7131 20.125V10.5449C27.7131 9.66602 27.1565 9.07032 26.3362 9.07032C25.9456 9.07032 25.5159 9.28516 25.135 9.6172L21.6877 12.5274V11.2871C21.6877 9.02149 20.3303 7.69337 18.0452 7.69337H8.40649C6.20923 7.69337 4.76392 9.02149 4.76392 11.2871V19.3828C4.76392 21.6582 6.12134 22.9668 8.40649 22.9668ZM8.67993 21.4922C7.18579 21.4922 6.33618 20.7109 6.33618 19.1289V11.5215C6.33618 9.94923 7.18579 9.16798 8.67993 9.16798H17.7717C19.2561 9.16798 20.1155 9.94923 20.1155 11.5215V19.1289C20.1155 20.7109 19.2561 21.4922 17.7717 21.4922H8.67993ZM25.8284 19.7246L21.6877 16.3164V14.3535L25.8284 10.9551C25.9065 10.8867 25.9651 10.8477 26.0432 10.8477C26.1506 10.8477 26.1995 10.9258 26.1995 11.0527V19.6172C26.1995 19.7441 26.1506 19.832 26.0432 19.832C25.9651 19.832 25.9065 19.7832 25.8284 19.7246Z"
                  class="fill-black opacity-60 dark:fill-white"
                />
              </svg>
            </a>
          </li>
          <li class="flex items-center justify-center">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <svg
                width="19"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.924072 15.3887C0.924072 16.0918 1.47095 16.5606 2.36938 16.5606H6.23657C6.3147 18.3379 7.72095 19.9199 9.7229 19.9199C11.7249 19.9199 13.1311 18.3477 13.219 16.5606H17.0764C17.9749 16.5606 18.5217 16.0918 18.5217 15.3887C18.5217 14.4414 17.594 13.6113 16.7834 12.791C16.1584 12.1563 16.0022 10.8574 15.9143 9.72462C15.8264 6.13087 14.8596 3.78712 12.4182 2.89845C12.0959 1.68751 11.0901 0.740242 9.7229 0.740242C8.35571 0.740242 7.35962 1.68751 7.02759 2.89845C4.58618 3.78712 3.61938 6.13087 3.53149 9.72462C3.45337 10.8574 3.28735 12.1563 2.66235 12.791C1.85181 13.6113 0.924072 14.4414 0.924072 15.3887ZM2.85767 15.0762V14.959C3.05298 14.6953 3.59985 14.168 4.0686 13.6309C4.7229 12.8984 5.0354 11.6582 5.11353 9.8711C5.20142 5.93555 6.38306 4.65626 7.93579 4.23634C8.17017 4.17774 8.29712 4.07032 8.30688 3.82618C8.34595 2.86915 8.88306 2.21485 9.7229 2.21485C10.5627 2.21485 11.1096 2.86915 11.1389 3.82618C11.1584 4.07032 11.2854 4.17774 11.51 4.23634C13.0627 4.65626 14.2444 5.93555 14.3323 9.8711C14.4202 11.6582 14.7229 12.8984 15.3772 13.6309C15.8557 14.168 16.3928 14.6953 16.5784 14.959V15.0762H2.85767ZM7.77954 16.5606H11.676C11.6077 17.7813 10.8167 18.5625 9.7229 18.5625C8.62915 18.5625 7.8479 17.7813 7.77954 16.5606Z"
                  class="fill-black opacity-60 dark:fill-white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SearchBar from "./SearchBar.vue";
export default defineComponent({
  name: "NavBar",

  components: {
    SearchBar,
  },
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
