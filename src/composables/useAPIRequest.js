import { ref } from 'vue'

export default function useAPIRequest(params) {

  const isLoading = ref(false);
  const errorMessage = ref(null);
  const response = ref(null);

  async function handle() {
    isLoading.value = true;
    try {
      const url = import.meta.env.VITE_API_URL;
      let { endpoint, method } = params;
      if(!endpoint.startsWith("/")) {
        endpoint += "/";
      }

      const apiResponse = await fetch(url+endpoint, {
        method: method ?? "GET",
        ... params.body && {
          body: JSON.stringify(params.body)
        }
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
  }

  return {isLoading, errorMessage, handle};

}
