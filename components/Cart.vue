<template>
    <div class="p-4">
      <h1 class="text-2xl font-semibold mb-4">My Cart</h1>
      <div v-if="cart.length === 0" class="text-gray-500">Your cart is empty.</div>
      <div v-else>
        <div v-for="product in cart" :key="product.id" class="bg-white p-4 rounded-xl shadow-md mb-4">
          <div class="grid grid-cols-2 gap-4">
            <!-- Left side - Product Image -->
            <div>
              <img :src="product.image" alt="Product Image" class="object-cover w-full h-24 rounded">
            </div>
            <!-- Right side - Product Details -->
            <div>
              <h2 class="text-xl font-semibold">{{ product.title }}</h2>
              <p class="text-gray-500 mt-2">${{ product.price.toFixed(2) }}</p>
              <div class="mt-2">
                <button @click="cartStore.removeItem(product)" class="text-red-500 hover:text-red-600 font-semibold">
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { useCart } from '~/stores/cart'

const cartStore = useCart()

const cart = computed(() => cartStore.products)

onMounted(() => {
    cartStore.initialize()
})

</script>