<template>
    <div class="p-4">
      <div class="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <!-- Left side - Product Image -->
        <img :src="product.image" alt="Product Image" class="object-cover w-full h-64">
        <div class="p-6">
          <!-- Right side - Product Details -->
          <h1 class="text-xl font-semibold">{{ product.title }}</h1>
          <div class="mt-2">
            <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
              {{ product.category }}
            </span>
            <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700">
              Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
            </span>
          </div>
          <p class="text-gray-500 mt-2">${{ product.price.toFixed(2) }}</p>
        </div>
      </div>
  
      <!-- Description Card -->
      <div class="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 mt-4">
        <h2 class="text-lg font-semibold">Description</h2>
        <p class="text-gray-700 mt-2">{{ product.description }}</p>
      </div>
    </div>
  </template>

<script setup>
    const product = await $fetch('https://fakestoreapi.com/products/1')

    console.log(product)
</script>