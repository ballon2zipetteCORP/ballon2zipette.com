import { onMounted, ref } from 'vue'

const API_KEY = "675c7d072b50bcbf9e0308ca";
const ENDPOINT = "https://ballon2zipette-d14f.restdb.io/rest/items";

export function useItems() {

  const response = ref(null);
  const errorMessage = ref(null);
  const isLoading = ref(false);

  onMounted(async () => {
    try {
      const res = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
          'x-apikey': API_KEY
        }
      });
      if(!res.ok) {
        errorMessage.value = JSON.stringify(res.body);
        return;
      }

      response.value = await res.json();
    } catch(e) {
      errorMessage.value = e.message;
    }
  })

  return {response, errorMessage, isLoading};

}
