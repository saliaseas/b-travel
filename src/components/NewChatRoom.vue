<template>
  <form>
    <textarea
      @keypress.prevent.enter="hendleSubmit"
      v-model="message"
      placeholder="Type a massage and hint enter to send"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { Timestamp } from "@firebase/firestore";
import { getUser } from "@/composables/getUser";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const hendleSubmit = () => {
      const newMessage = {
        name: user.value.displayName,
        message: message.value,
        createdAt: Timestamp.fromDate(new Date()),
      };

      message.value = "";
    };
    return {
      message,

      hendleSubmit,
    };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  font-family: inherit;
  outline: none;
  resize: vertical;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
