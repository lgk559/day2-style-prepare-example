<template>
    <button class="product-button">{{ buttonText }}</button>
</template>
<script setup="">
defineProps({
    buttonText: String
})
</script>