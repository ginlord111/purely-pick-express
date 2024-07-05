<template>
  <div
    class="hover:border-black transition border-[1px] p-2 outline-transparent bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0,0.15)] cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <img :src="`${product.url}`" class="rounded-md" />
    </NuxtLink>
    <div class="flex gap-4 mt-1">
      <span class="text-[#FF6674] font-semibold">${{ priceComputed }}</span>
      <span class="text-gray-500 line-through font-semibold"
        >${{ oldPriceComputed }}</span
      >
    </div>
    <span class="text-[#FF6674] truncate text-md font-bold">Extra 5% off</span>
    <div class="flex flex-row gap-2 text-xs font-bold text-center mt-1">
      <span class="bg-[#FD374F] text-white p-1 rounded-sm">Welcome Deal</span>
      <span class="bg-[#F5F5F5] text-[#C08562] p-1 rounded-sm"
        >Top Selling</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from "~/types/types";
const props = defineProps<{
  product: ProductType;
}>();
const { product } = props;
const priceComputed = computed(() => {
  return product.price / 100;
});

const oldPriceComputed = computed(() => {
  let res = (product.price + product.price / 20) / 100;

  return res.toFixed(2);
});
</script>
