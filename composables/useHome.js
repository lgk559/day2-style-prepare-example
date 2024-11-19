export const useHome = () => {
  // API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
  // 使用 ES6 fetch() 或是 axios.get() 串接 API
  // 切換 isLoading 狀態
  const newsList = ref([]);
  const isLoading = ref(false);

  async function getNewsList() {
    isLoading.value = true
    try {
      newsList.value = await $fetch('https://nuxr3.zeabur.app/api/v1/home/news/')
    } catch(error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

    return {
      newsList,
      isLoading,
      getNewsList
    }
  }