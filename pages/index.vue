<template>
  <div class="main px-3 border bg-light">

    <p>可藉由取不同變數，讓兩組計數器不互相影響</p>
    <button type='button' @click="decrement1">減少</button>
    {{ count1 }}
    <button type='button' @click="increment1">增加</button>

    <br>

    <button type='button' @click="decrement2">減少</button>
    {{ count2 }}
    <button type='button' @click="increment2">增加</button>

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
  const { count: count1, increment: increment1, decrement: decrement1 } = useCounter();
  const { count: count2, increment: increment2, decrement: decrement2 } = useCounter();
  const {newsList, isLoading, getNewsList} = useHome();

  onMounted(()=>{
    getNewsList();
  })


</script>

<style scoped>

</style>