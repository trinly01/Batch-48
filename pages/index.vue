<template>
    <h1>Batch 48</h1>

    {{ products }}
</template>

<script setup>

const products = await $fetch('https://fakestoreapi.com/products/')

</script>