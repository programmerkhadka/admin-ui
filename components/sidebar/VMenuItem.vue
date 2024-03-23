<template>
  <li>
    <a
      href="#"
      class="relative flex py-3 hover:bg-slate-300"
      @click="toggleOpen"
      :class="computedPadding"
    >
      <span>{{ item.text }}</span>
      <ChevronDownIcon
        class="absolute w-6 h-6 right-1"
        v-if="item.children.length"
      />
    </a>
    <ul
      class="flex flex-col transition-[height] duration-150 ease-in-out overflow-hidden"
      :class="{ 'h-auto': isOpen, 'h-0': !isOpen }"
    >
      <VMenuItem
        v-for="(subItem, index) in item.children"
        :key="subItem.slug"
        :item="subItem"
      />
    </ul>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const computedPadding = computed(() => ({
  "pl-3": props.item.level === 0,
  "pl-6": props.item.level === 1,
  "pl-8": props.item.level === 2,
  "pl-10": props.item.level === 3,
}));
</script>
