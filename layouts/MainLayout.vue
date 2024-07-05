<template>
  <div class="w-full fixed ">
    <div class="w-full z-50 bg-white">
      <ul
        class="border-b flex justify-end text-xs items-center text-[#333333] font-light flex-row px-5 h-10 b-[#FAFAFA] max-w-[1200px] lg:max-w-full"
      >
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
          v-for="item in navItem"
          @mouseenter="item.name === 'Account' ? (isAccountMenu = true) : null"
          @mouseleave="item.name === 'Account' ? (isAccountMenu = false) : null"
        >
          <template
            v-if="item.icons?.length === 2"
            class="relative w-full flex items-center px-2.5 hover:text-[#ff4646] h-full cursor-pointer"
            :class="
              isAccountMenu
                ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
                : 'border border-[#FAFAFA]'
            "
          >
            <Icon :name="item.icons[0]" size="14" class="mr-1" />
            {{ item.name }}
            <Icon :name="item.icons[1]" size="14" class="ml-5" />
          </template>
          <template v-else>
            <template v-for="icon in item.icons">
              <Icon :name="icon" size="14" class="mr-1" />
            </template>
            {{ item.name }}
          </template>

          <div
            class="px-3 absolute bg-white w-[220px] text-black z-40 top-[30px] right-[0px] border-x border-b"
            v-if="isAccountMenu && item.name === 'Account'"
          >
            <div class="text-semibold text-[15px] my-4">
              Welcome to Purely Pick Express
            </div>
            <div class="flex items-center gap-1 mb-3">
              <NuxtLink
                to="/auth"
                class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
              >
                Login/Register
              </NuxtLink>
            </div>
            <div class="pt-2 flex flex-col border-b gap-4 text-md w-full pb-2">
              <div
                class="text-bold hover:bg-gray-300 p-1 w-full rounded-sm transition"
              >
                My Orders
              </div>
              <div
                class="text-bold hover:bg-gray-300 p-1 w-full transition rounded-sm"
              >
                Sign Out
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div
        class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto items-center"
      >
        <NuxtLink to="/">
          <img src="/logo-2.PNG" width="170" />
        </NuxtLink>

        <div class="md:block hidden relative flex-1">
          <div
            class="flex items-center border-2 border-[#FF4646] rounded-md w-full"
          >
            <input
              class="py-1 w-full placeholder-gray-400 text-sm pl-3 focus:outline-none text-gray-400"
              type="text"
              v-model="searchItem"
            />
            <button
              class="flex items-center h-full p-1 bg-[#FF4646] rounded-sm text-white"
            >
              <Icon name="ph:magnifying-glass" size="20" />
            </button>
          </div>
          <div class="absolute bg-white h-auto w-full"
          v-if="false"
          >
            <div class="p-1 w-full">
              <NuxtLink
                class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-300 py-4 rounded-md"
              >
                <div class="flex items-center">
                  <img class="rounded-md" src="/logo-2.PNG" width="40" />
                  <div class="truncate ml-2">TEST</div>
                </div>
                <div class="truncate">$ 932.2</div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink to="/cart" class="relative md:flex hidden md:items-center">
          <span
            class="flex items-center justify-center absolute -right-[3px] top-0 bg-[#F46464] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
          >
            0
          </span>
          <div class="min-w-[40px]">
            <Icon
              name="ph:shopping-cart-simple-light"
              size="33"
              class="hover:bg-[#FF4646]"
            />
          </div>
        </NuxtLink>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
const searchItem = ref("");
const navItem = ref([
  {
    name: "Sell on Purely Pick Express",
  },
  {
    name: "Cookie Preference",
  },
  {
    name: "Buyer Protection",
  },

  {
    name: "Help",
  },
  {
    name: "App",
    icons: ["ic:sharp-install-mobile"],
  },
  {
    name: "Account",
    icons: ["ph:user-thin", "mdi-chevron-down"],
  },
]);
const isAccountMenu = ref(false);
</script>
