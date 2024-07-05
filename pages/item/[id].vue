<template>
  <MainLayout>
    <div class="mt-4 max-w-[1200px] mx-auto px-2 relative">
      <div class="flex gap-4 mx-auto w-full h-full">
        <div class="flex flex-col md:w-[40%] space-y-2 h-full">
          <div class="relative">
            <img
              class="rounded-lg object-fit"
              :src="currentImage === '' ? images[0] : currentImage"
            />
          </div>
          <div class="flex items-center justify-center gap-1">
            <div v-if="images[0]" v-for="image in images">
              <img
                @mouseenter="currentImage = image"
                :src="image"
                width="60"
                :class="currentImage === image && 'border-[#FD374F]'"
                class="border-2"
              />
            </div>
          </div>
        </div>

        <div class="bg-white md:w-[60%] rounded-md p-3">
          <div class="flex flex-col w-full h-full">
            <span class="text-lg font-bold truncate">Title</span>
            <span class="text-sm font-bold truncate">This is descr</span>
            <div class="flex items-center mt-1">
              <span
                class="h-5 min-w-5 rounded-full bg-[#FFD000] mr-2 flex items-center justify-center"
              >
                <Icon name="material-symbols:star-rounded" size="16" />
              </span>
              <span class="text-[#FF5353]">Extra 5% off</span>
            </div>
            <div class="flex items-center justify-start pt-2">
              <Icon
                name="material-symbols:star-rounded"
                class="text-[#FF5353]"
              />
              <Icon
                name="material-symbols:star-rounded"
                class="text-[#FF5353]"
              />
              <Icon
                name="material-symbols:star-rounded"
                class="text-[#FF5353]"
              />
              <Icon
                name="material-symbols:star-rounded"
                class="text-[#FF5353]"
              />
              <Icon name="material-symbols:star-rounded" />
              <span class="text-sm font-light ml-2"
                >213 rev iews 500+ orders</span
              >
            </div>

            <div class="border-t-[1px] mt-3">
              <div class="flex flex-col items-start gap-2">
                <span class="font-bold text-lg">$ {{ priceComputed }}</span>
                <button
                @click="addToCart()"
                  class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
const currentImage = ref("");
const images = ref([
  "https://picsum.photos/id/212/800/800",
  "https://picsum.photos/id/233/800/800",
  "https://picsum.photos/id/165/800/800",
  "https://picsum.photos/id/99/800/800",
  "https://picsum.photos/id/144/800/800",
]);

const priceComputed = computed(() => {
  return "32.40";
});

const addToCart = () => {
  
}
</script>
