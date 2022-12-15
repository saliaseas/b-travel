<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" placeholder="Name" required type="name" />
    <input v-model="email" placeholder="Email" required type="email" />
    <input v-model="password" placeholder="Password" required type="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useSignup } from "@/composables/useSignup";
export default {
  setup(props, {emit}) {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
          const user = await useSignup(name.value,email.value,password.value );
          if(user){
            emit("islam")
          }
        }
    return {
      name,
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style></style>
