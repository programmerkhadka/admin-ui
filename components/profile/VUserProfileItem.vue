<template>
  <li>
    <NuxtLink class="flex px-2 py-2 cursor-pointer gap-x-3 hover:bg-slate-300">
      <component :is="item.icon" class="w-6 h-6" />
      <span> {{ item.name }}</span>
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
