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

      <button @click="addToCart" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Add to Cart
        </button>

        <Cart />
    </div>
  </template>

<script setup>
    import { useCart } from '~/stores/cart'
    const route = useRoute()

    const cartStore = useCart()

    onMounted(() => {
        console.log('hello world')
        cartStore.initialize()
    })
    

    // const cart = computed(() => cartStore.products)

    const product = await $fetch('https://fakestoreapi.com/products/'+ route.params.id)

    console.log(product)

    const addToCart = () => {
        cartStore.addToCart(product)
    }
</script>