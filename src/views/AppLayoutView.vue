<template>
  <div class="flex flex-col items-center w-screen min-h-screen">
    <!-- Header -->
    <div class="w-screen fixed z-40 bg-black">
        <header-view></header-view>
    </div>
    <!-- content -->
    <div class="w-full min-h-screen bg-black">
        <router-view></router-view>
    </div>
    <!-- Footer -->
    <div class="w-full bg-neutral-900">
      <footer-view></footer-view>
    </div>
  </div>
  <!-- <div class="">
    <audio autoplay loop class="hidden">
      <source src="../assets/mixkit-special-days-19.mp3">
    </audio>
  </div> -->
</template>

<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
export default {    
    components: {
        HeaderView,
        FooterView,
    }
}
</script>

<style>

</style>