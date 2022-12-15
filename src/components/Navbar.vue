<template>
  <nav>
    <div v-if="user">
      <p>Добро Пожаловать {{user.displayName}}</p>
      <p class="email">Вы вошли в аккаунт с почтой {{user.email}}</p>
    </div>
    <div v-else>
      LOADING...
    </div>
    <button @click="handleClick">Выйти</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useLogout from "../composables/useLogout"
import { getUser } from "../composables/getUser";
export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if(!error.value) {
        router.push("/");
      }
    }

    return {
      handleClick,
      error,
      user
    }
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
