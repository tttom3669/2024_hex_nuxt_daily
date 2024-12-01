export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getNewList = async () => {
    isLoading.value  = true;
    try {
      const responseJson = await fetch(
        `https://nuxr3.zeabur.app/api/v1/home/news/`
      );
      const { result } = await responseJson.json();
      newsList.value = result;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    newsList,
    getNewList,
    isLoading,
  };
};
