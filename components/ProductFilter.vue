<template>
<div class="flex items-center justify-between bg-gray-200 py-4 px-8">
    <!-- Left side: Tabs -->
    
    <div class="flex items-center space-x-6">
    <NuxtLink  to="/" >
        <button
            ref="/"
            class="bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
            >
        Home
        </button>
    </NuxtLink >
    
        <!-- {{ activeTab }} asd -->
    <button
        v-for="category in categories"
        :key="category"
        :class="{'bg-blue-500 text-white': activeTab === category, 'text-gray-700': activeTab !== category}"
        @click="filterStore.setActiveTab(category)"
        class="py-2 px-4 rounded focus:outline-none"
    >
        {{ category }}
    </button>
    </div>

    <!-- Center: Search Bar -->
    <div class="flex-1 flex items-center justify-center">
        <!-- {{ searchText }} -->
    <input
        :value="searchText"
        @input="event => setSearchText(event.target.value)"
        type="text"
        class="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none"
        placeholder="Search..."
    />
    </div>

    <!-- Right side: Cart Button -->
    <NuxtLink to="/cart">
        <button
        ref="/cart"
        class="bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
        >
        Cart ({{ cart.length }})
        </button>
    </NuxtLink>
</div>
</template>

<script setup>

import { useProductFilter } from '~/stores/filter'

import { useCart } from '~/stores/cart'

const cartStore = useCart()

onMounted(() => {
    console.log('hello world')
    cartStore.initialize()
})
    

const cart = computed(() => cartStore.products)

const filterStore = useProductFilter()

const searchText = computed(() => filterStore.getSearchText)
const activeTab = computed(() => filterStore.getActiveTab)

const setSearchText = (txt) => {
    console.log('input', txt)
    filterStore.setSearchText(txt)
}

const categories = ['all', ...await $fetch('https://fakestoreapi.com/products/categories')];
</script>
