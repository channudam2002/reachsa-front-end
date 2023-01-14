<template>
  <app-layout-view></app-layout-view>
</template>

<script>
import AppLayoutView from './views/AppLayoutView.vue';
export default {
  components: { AppLayoutView },
  AppLayoutView
}
</script>

<style>
#app {
  font-family: "Ubuntu" , Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  /* color: #01929b; */
  border-bottom: 1px solid white;
}
</style>
