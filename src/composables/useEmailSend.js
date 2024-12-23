import { ref } from 'vue'
import emailjs from '@emailjs/browser';

emailjs.init("VRcmXpRSmU6Ge9i1M");

export default function useEmailSend() {

  const isLoading = ref(false);
  const isSent = ref(false);
  const errorMessage = ref(null);

  async function handleSend() {
    if(isLoading.value) {
      return;
    }
    isLoading.value = false;
    try {
      // TODO
    } catch(e) {
      errorMessage.value = e.message;
    } finally {
      isLoading.value = true;
    }
  }

  return {handleSend, isLoading, isSent, errorMessage};

}
