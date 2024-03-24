<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <div class="relative flex items-center w-10 h-10 place-content-center">
          <BellIcon class="w-10 h-10 text-gray-600" />
          <span
            class="w-5 h-5 top-0 flex items-center place-content-center p-1 font-medium bg-red-500 rounded-full text-[10px] text-white absolute"
            >{{ count }}<span>+</span></span
          >
        </div>
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-xl top-[40px] rounded-xl w-80 min-h-64 ring-1 ring-black/5 focus:outline-none"
      >
        <div class="pt-2">
          <ul class="flex flex-col">
            <VNotificationItem
              v-for="(item, index) in navigationItems"
              :key="item"
              :item="item"
            />
          </ul>
          <div
            class="flex items-center py-2 text-white bg-gray-600 cursor-pointer place-content-center"
          >
            <span>View All</span>
          </div>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/24/solid";
import VNotificationItem from "./VNotificationItem.vue";
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});
const navigationItems = [
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
  {
    thumbnailUrl:
      "https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur elit. scelerisque enim",
    herf: "#",
    time: "2 hours ago",
  },
];
</script>
