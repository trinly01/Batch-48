<script setup>
const { product } = defineProps(['product']);
</script>
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full h-48 object-contain" :src="product.image">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 truncate h-12">{{ product.title }}</div>
      <p class="text-gray-700 text-base line-clamp-3 h-14">
        {{ product.description }}
      </p>
      <p class="text-gray-700 text-base mt-2">Category: {{ product.category }}</p>
      <p class="text-gray-700 text-base mt-2">Price: ${{ product.price }}</p>
      <div class="flex items-center mt-4">
        <svg class="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <path
              d="M12 2a10.06 10.06 0 00-3.08 19.56l1.72 3.06a1 1 0 001.76 0l1.72-3.06A10.06 10.06 0 0012 2zm0 17a8 8 0 01-5.39-2.06l1.45-2.58a1 1 0 00-.34-1.38L5.07 11H9a1 1 0 011 .76l1.44 4.35a1 1 0 001 .75h4.1l-1.65 2.92a1 1 0 00-.33.66A8 8 0 0112 19zm6.1-5.28l1.16-2.05a1 1 0 00-.34-1.38l-2.17-1.43 1-3a1 1 0 00-1.45-1.1L12 6.59l-2.3-1.72a1 1 0 00-1.45 1.1l1 3L4.08 8.86a1 1 0 00-.34 1.38l1.16 2.05a8 8 0 011.44-7.38l-.54-1.63a1 1 0 00-1.92 0l-.54 1.63a8 8 0 011.44 7.38l1.16-2.05a1 1 0 011.72 0l1.16 2.05a8 8 0 017.4 0z"
              data-name="star"
            />
          </g>
        </svg>
        <p class="ml-2 text-gray-700">{{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      </div>
    </div>
  </div>
</template>