<template>
  <Header/>
  <router-view></router-view>
  <player/>
  <Auth/>
</template>

<script>
import Auth from "@/components/Auth.vue";
import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {Auth, Header}
}
</script>

<script setup>
import {useUserStore} from "@/stores/user";
import {auth} from '@/includes/firebase';
import Player from "@/components/Player.vue";

const store = useUserStore()

if (auth.currentUser) {
  store.userLoggedIn = true
}

</script>

<style>

</style>
