<template>
    <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard
                v-for="product in products"
                :key="'product'+ product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script setup>

const products = await $fetch('https://fakestoreapi.com/products/')

</script>
