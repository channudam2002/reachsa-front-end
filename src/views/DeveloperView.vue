<template>
  <div class="w-full h-screen flex flex-col">
        <div class="w-full h-3/6 text-white">
            <div class="relative w-full h-full overflow-hidden">
                <video src="../assets/herovideo6.mp4" class="absolute top-0 left-0 w-full" autoplay loop></video>
                <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
                <div class="flex flex-col space-y-10 p-36 w-full justify-center items-center h-full absolute top-0 left-0">
                    <div>
                        <p class="text-6xl">Push your <span class="text-secondary-color">project</span> to real world of <span class="text-primary-color">IoT</span></p>
                    </div>
                    <div class="p-4 px-8 rounded-full border text-3xl cursor-pointer hover:bg-primary-color hover:border hover:border-primary-color hover:bg-opacity-50">
                        <p>Go to Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-3/6 py-32 px-72 items-center justify-center space-x-20 flex flex-row text-white">
            <div class="w-1/4 flex flex-col space-y-3 items-center border rounded-md p-5 hover:bg-white hover:text-black cursor-pointer">
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit esse voluptatem ab voluptas obcaecati velit explicabo dolor maxime odit veritatis.
                </div>
                <div>

                </div>
            </div>
            <div class="w-1/4 flex flex-col space-y-3 items-center border rounded-md p-5 hover:bg-white hover:text-black cursor-pointer">
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit esse voluptatem ab voluptas obcaecati velit explicabo dolor maxime odit veritatis.
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