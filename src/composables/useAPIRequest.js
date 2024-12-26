import { onMounted, ref } from 'vue'

export default function useAPIRequest(params) {

  const isLoading = ref(true);
  const errorMessage = ref(null);
  const response = ref(null);

  onMounted(async () => {
    isLoading.value = true;
    try {
      const url = import.meta.env.VITE_API_URL;
      let { endpoint, method } = params;
      if(!endpoint.startsWith("/")) {
        endpoint += "/";
      }

      const apiResponse = await fetch(url+endpoint, {
        method: method ?? "GET"
      });
      const data = await apiResponse.json();

      if(!apiResponse.ok) {
        errorMessage.value = data?.error ?? apiResponse.stausText;
        return;
      }

      response.value = data;
    } catch(e) {
      errorMessage.value = e.message;
    } finally {
      isLoading.value = false;
    }
  });

  return {isLoading, errorMessage, response};

}
