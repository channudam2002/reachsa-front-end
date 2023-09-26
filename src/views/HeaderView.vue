<template>
   <nav class="w-full flex flex-row space-x-3 items-center justify-between text-white p-5 px-16  sm:px-10">
        <div class="sm:w-1/12 w-1/2">
            <img src="../assets/Reachsa.png" alt="" class="w-full">
        </div>
        <div class="flex-row space-x-10 items-center font-bold sm:flex hidden">
            <router-link :to="{name: 'home'} " class="hover:border-b cursor-pointer">
                <p>Home</p>
            </router-link>
            <div class="hover:border-b cursor-pointer">
                <p>Features</p>
            </div>
            <div class="hover:border-b cursor-pointer">
                <p>Pricing</p>
            </div>
            <router-link :to="{name: 'developer'}" class="hover:border-b cursor-pointer">
                <p>Developers</p>
            </router-link>
            <div class="hover:border-b cursor-pointer">
                <p>About</p>
            </div>
            <div class="hover:border-b cursor-pointer">
                <p>Contact</p>
            </div>
            <div class="hover:border-b hover:border-primary-color cursor-pointer flex flex-row space-x-3 items-center text-primary-color">
                <div>
                    <i class="fa-solid fa-mobile-screen"></i>
                </div>
                <div>
                    <p>Get Reachsa App</p>
                </div>
            </div>
        </div>
        <!-- <div class="flex-row space-x-5 items-center sm:flex hidden">
            <div>
                <p>Sign in</p>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <p>Sign up</p>
            </div>
        </div> -->
        <div class="sm:hidden block text-2xl">
            <i class="fa-solid fa-bars-staggered"></i>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>