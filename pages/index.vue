<template>
  <MainLayout>
    <div class="mt-4 max-w-[1200px] mx-auto px-2 text-black relative">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <div v-if="products" v-for="product in products">
          <ProductComponent  :product="product" :key="product.id"/>
        </div>

      </div>
    </div>

  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';

const products = [
  {
    id:1, title:"Title 1", description:"This is descrr", url:"https://picsum.photos/id/76/800/800",
    price:52
  }
]

</script>




