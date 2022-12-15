<template>
  <div class="container">
    <Navbar />
    <NewChatRoom/>
  </div>
</template>

<script>
import NewChatRoom from "@/components/NewChatRoom.vue";
import Navbar from "../components/Navbar.vue"
export default {
    components: { Navbar, NewChatRoom },

    }
</script>

<style>

</style>