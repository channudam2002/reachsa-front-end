<template>
  <div class="min-w-screen min-h-screen bg-white text-gray-700 mt-28">
    <div class="flex flex-row space-x-3 items-center w-full h-screen p-3 relative">
        <div class="w-2/12 h-full sticky">
            <div class="h-full w-full flex flex-col space-y-0">
                <!-- Dashboard -->
                <router-link :to="{name: 'dashboard'}" class="flex flex-row space-x-3 items-center py-2 px-3 hover:text-secondary-color hover:shadow-md group hover:bg-gray-100 cursor-pointer">
                    <div>
                        <span class="material-symbols-outlined">dashboard</span>
                    </div>
                    <div class="group-hover:drop-shadow-lg">
                        <p>Dashboard</p>
                    </div>
                </router-link>
                <div>
                    <hr>
                </div>
                <!-- Devices -->
                <router-link :to="{name: 'devices'}" class="flex flex-row space-x-3 items-center p-3 hover:text-secondary-color hover:shadow-md group hover:bg-gray-100 cursor-pointer">
                    <div>
                        <span class="material-symbols-outlined">devices</span>
                    </div>
                    <div class="group-hover:drop-shadow-lg">
                        <p>My Devices</p>
                    </div>
                </router-link>
                <div>
                    <hr>
                </div>
                <!-- Control -->
                <div class="flex flex-row space-x-3 items-center py-2 px-3 hover:text-secondary-color hover:shadow-md group hover:bg-gray-100 cursor-pointer">
                    <div>
                        <span class="material-symbols-outlined">tune</span>
                    </div>
                    <div class="group-hover:drop-shadow-lg">
                        <p>Control</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="w-10/12 h-full bg-gray-200 p-3 rounded-lg">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>