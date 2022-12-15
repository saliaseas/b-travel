<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" placeholder="Email" required type="email">
    <input v-model="password" placeholder="Password" required type="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useLogin } from "@/composables/useLogin";
import { useRouter } from 'vue-router';
export default {
    setup(props, {emit}) {
        const email = ref("");
        const password = ref("");
        

        const handleSubmit = async () => {
          const user = await useLogin(email.value,password.value);
          if(user){
            emit("talgat")
          }


        }

        return {
            email,
            password,
            handleSubmit
        }
    }

}
</script>

<style>

</style>