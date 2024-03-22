<template>
  <div class="bg-gray-50">
    <div
      class="w-full bg-white topbar min-h-[70px] border-b-2 py-2 px-4 grid grid-cols-2 items-center justify-between top-0 sticky z-10"
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
    </div>
    <div class="relative flex">
      <VSidebar :isCollapse="isCollapse" />
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
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
