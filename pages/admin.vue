<template>
    <div class="main px-3 border bg-light">
        <p>admin外層(admin.vue)</p>
        <NuxtPage />
    </div>
</template>
<script setup="">
definePageMeta({
    layout: 'admin'
});
</script>
