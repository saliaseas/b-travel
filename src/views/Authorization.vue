<template>
  <div class="authorization container">
    <div class="authorization_background">
      <img
        class="authorization_img"
        src="../assets/seats.jpg"
        alt="background"
      />
    </div>
    <div class="authorization__window">
      <div v-if="showForm">
        <h2 class="signgin__title">Sign In</h2>
        <Login @talgat="handleSubmit" />
        <p>
          New to Cinema?
          <span @click="showForm = false">Sign Up now</span>
        </p>
      </div>
      <div v-else>
        <h2>Sign Up</h2>
        <SignUpForm @islam="handleSubmit" />
        <p>
          Already registered?
          <span @click="showForm = true">Sign in</span> instead.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import Login from "@/components/Login.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: { SignUpForm, Login },
  setup() {
    const showForm = ref(false);
    const router = useRouter();

    const handleSubmit = () => {
      router.push("./chatroom");
    };
    return {
      showForm,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss">
.authorization {
  text-align: center;
  padding: 43px 0;
  &__window {
    width: 646px;
    height: 656px;
    background: rgba(34, 33, 39, 0.5);
    backdrop-filter: blur(6px);
    border-radius: 22px;
  }
  &__title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    color: #ffffff;
    margin-top: 43px;
  }

  &_img {
    min-height: 100%;
    min-width: 640px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;

    @media screen and (max-width: 640px) {
      img.bg {
        left: 50%;
        margin-left: -320px;
      }
    }
  }
}

.authorization input {
  width: 80%;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(247, 247, 247, 0.3);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  margin-bottom: 33px;
}
.authorization span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  color: white
}
.authorization button {
  display: block;
  margin: 20px auto;
  width: 80%;
  height: 75px;
  background: #990119;
  border-radius: 20px;
}

.signgin__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  color: #ffffff;
  margin-top: 42px;
}
</style>
