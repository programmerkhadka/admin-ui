<template>
  <div class="min-h-screen bg-gray-50">
    <div
      class="w-full bg-white topbar min-h-[70px] border-b-2 py-2 px-4 grid grid-cols-2 items-center justify-between"
    >
      <div class="flex place-items-center">
        <div
          class="border rounded-md cursor-pointer hover:border-blue-600"
          @click="isCollapse = !isCollapse"
        >
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
        class="min-h-screen bg-white border-r-2 sidebra transition-[width] duration-150 ease-in-out absolute left-0 xl:static overflow-hidden"
        :class="isCollapse ? 'w-0' : ' w-96'"
      >
        <ul class="flex flex-col">
          <li class="relative flex items-center px-2 py-4 border">
            <span>Menu 1</span>
            <!-- <ChevronDownIcon class="absolute w-6 h-6 font-bold right-1" /> -->
            <ul class="">
              <li><span>Sub Menu 1</span></li>
              <li><span>Sub Menu 2</span></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <!-- This ithe area where pages are rendered -->
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted, ref } from "vue";
const isCollapse = ref(false);

const windowWidthRef = ref(0);
onMounted(() => {
  window.addEventListener("resize", handleResize);
  windowWidthRef.value = window.innerWidth;
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  windowWidthRef.value = window.innerWidth;
};

watch(windowWidthRef, (newValue, oldValue) => {
  if (newValue < 1280) {
    isCollapse.value = true;
  } else {
    isCollapse.value = false;
  }
});
</script>
