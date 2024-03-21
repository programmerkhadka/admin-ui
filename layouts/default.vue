<template>
  <div class="min-h-screen bg-gray-50">
    <div
      class="w-full bg-white topbar min-h-[70px] border-b-2 py-2 px-4 grid grid-cols-2 items-center justify-between"
    >
      <div class="flex place-items-center">
        <div class="border cursor-pointer" @click="isCollapse = !isCollapse">
          <Bars3Icon class="w-8 h-8" v-if="isCollapse" />
          <XMarkIcon class="w-8 h-8" v-else />
        </div>
      </div>
      <div class="flex justify-end gap-x-5">
        <div class="w-10 h-10 border border-red-400"></div>
        <div class="w-10 h-10 border border-red-400"></div>
      </div>

      <!--  <XMarkIcon class="w-8 h-8" /> -->
    </div>
    <div class="relative flex">
      <div
        class="min-h-screen bg-white border-r-2 sidebra transition-[width] duration-150 ease-in-out absolute left-0 xl:static"
        :class="isCollapse ? 'w-0' : ' w-96'"
      >
        <!-- THIS IS SIDE BAR -->
      </div>
      <div class="w-full">
        <!-- This ithe area where pages are rendered -->
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted } from "vue";
const isCollapse = ref(false);

onMounted(() => {
  console.log("I am on Mounted");
});

onUnmounted(() => {
  console.log("I am on Unmounted");
});
</script>
