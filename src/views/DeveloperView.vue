<template>
  <div class="w-full md:h-screen min-h-screen flex flex-col">
        <div class="w-full sm:h-3/6 h-[500px] text-white">
            <div class="relative w-full h-full overflow-hidden">
                <video src="../assets/herovideo6.mp4" class="absolute top-0 left-0 w-full h-full sm:h-screen" autoplay loop></video>
                <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
                <div class="flex flex-col space-y-10 sm:p-36 p-10 py-24 w-full justify-end items-center h-full absolute top-0 left-0 text-center">
                    <div>
                        <p class="sm:text-6xl text-3xl">Push your <span class="text-secondary-color">project</span> to real world of <span class="text-primary-color">IoT</span></p>
                    </div>
                    <a href="https://demo.reachsa.digital/" class="p-4 px-8 rounded-full border sm:text-3xl text-xl cursor-pointer hover:bg-primary-color hover:border hover:border-primary-color hover:bg-opacity-50">
                        <p>Go to Dashboard</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="w-full h-3/6 sm:py-32 sm:px-72 p-10 items-center justify-center sm:space-x-20 sm:space-y-0 flex sm:flex-row flex-col space-x-0 space-y-10 text-white">
            <a href="https://docs.reachsa.digital/" target="_blank"  class="sm:w-1/4 w-full flex flex-col space-y-3 items-center border rounded-md p-5 hover:bg-white hover:text-black cursor-pointer">
                <div class="text-3xl">
                    <i class="fa-solid fa-book"></i>
                </div>
                <div class="text-xl font-bold">
                    <p>Documentation</p>
                </div>
                <div class="w-full">
                    <hr>
                </div>
                <div class="text-center">
                    Document for Reachsa.io Platform. All you can read!
                </div>
                <div>

                </div>
            </a>
            <div class="sm:w-1/4 w-full flex flex-col space-y-3 items-center border rounded-md p-5 hover:bg-white hover:text-black cursor-pointer">
                <div class="text-3xl">
                    <i class="fa-solid fa-video"></i>
                </div>
                <div class="text-xl font-bold">
                    <p>Tutorial</p>
                </div>
                <div class="w-full">
                    <hr>
                </div>
                <div class="text-center">
                    Tutorial Video for general IoT Education. All you can watch!
                </div>
                <div>

                </div>
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