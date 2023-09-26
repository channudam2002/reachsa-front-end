<template>
  <app-layout-view></app-layout-view>
</template>

<script>
import axios from 'axios';
import AppLayoutView from './views/AppLayoutView.vue';
import titleMixin from './mixins/titleMixin';
export default {
  title(){
    return "Reaschsa"
  },
  components: { AppLayoutView },
  // mounted(){
  //   axios.get('https://api.airtable.com/v0/appc3TK8RWvMar2Mi/tbl7VJ2NC303HRuj2', {
  //     headers:{
  //       'Authorization': 'Bearer pat2WJzYjoc25FOEE.506d90bbe451ef32dad7aaaabdaa726887e2507ba72827bb9153af2a08d57505'
  //     }
  //   })
  //   .then(data => console.log(data.data.records))
  // }
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
