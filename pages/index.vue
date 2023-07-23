<template>
    <div class="container mx-auto px-4 py-8">
        <!-- <ProductFilter /> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard
                v-for="product in filteredProducts"
                :key="'product'+ product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script setup>

import { useProductFilter } from '~/stores/filter'

const filterStore = useProductFilter()
const searchText = computed(() => filterStore.getSearchText)
const activeTab = computed(() => filterStore.getActiveTab)

const products = await $fetch('https://fakestoreapi.com/products/')

const filteredProducts = computed(() => {
    if (activeTab.value === 'all') return products.filter(product => product.title.toLowerCase().includes(searchText.value.toLowerCase()))
    return products.filter(product => product.category === activeTab.value && product.title.toLowerCase().includes(searchText.value.toLowerCase()))
})

</script>
