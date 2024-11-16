<template>
    <p class="product-price">{{ price }}</p>
</template>
<script setup="">
defineProps({
    price: String,
})
</script>