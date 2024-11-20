<template>
  <div class="main px-3 border bg-light">

    <p>新聞列表：</p>
    <NewsCard v-for="item in newsList.result" 
      :key="item._id" :title="item.title" :image="item.image" :description="item.description" :created-at="item.createdAt" :updated-at="item.updatedAt" />
      
    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>

  </div>
</template>

<script setup>
  import Loading from "vue-loading-overlay";
  import "vue-loading-overlay/dist/css/index.css";
  const {newsList, isLoading, getNewsList} = useHome();

  onMounted(()=>{
    getNewsList();
  })


</script>

<style scoped>

</style>