<template>
  <li>
    <NuxtLink
      class="grid grid-cols-6 px-2 py-2 border-b-2 cursor-pointer hover:bg-gray-200"
      :to="item.href"
    >
      <div class="flex items-center col-span-1">
        <NuxtImg :src="item.thumbnailUrl" class="w-10 h-10 rounded-full" />
      </div>
      <div
        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
      >
        <div>
          <span>{{ item.text }}</span>
        </div>
        <div class="flex flex-row-reverse justify-end text-gray-400">
          <span> {{ item.time }}</span>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
