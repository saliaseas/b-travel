<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" placeholder="Email" required type="email" />
    <input v-model="password" placeholder="Password" required type="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup(props, { emit }) {
    const handleSubmit = async () => {
      if (user) {
        emit("talgat");
      }
    };

    return {
      handleSubmit
    };
  },
}
</script>

<style></style>
