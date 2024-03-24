<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <div class="relative z-10 grid h-10 grid-cols-12 w-60">
          <div class="relative col-span-2">
            <NuxtImg
              :src="user.profileUrl"
              class="absolute top-[20px] block rounded-full w-7 h-7 top-[5px] left-[5px]"
            />
          </div>
          <div class="flex items-center col-span-9">
            <p class="text-left line-clamp-1">
              {{ user.name }}
            </p>
          </div>
          <div class="flex items-center col-span-1">
            <ChevronDownIcon class="absolute w-6 h-6 right-1" />
          </div>
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
        class="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-xl top-[40px] rounded-xl w-60 min-h-64 ring-1 ring-black/5 focus:outline-none"
      >
        <div class="py-1">
          <div class="grid grid-cols-5 px-2 pb-2 border-b-2">
            <div class="col-span-1">
              <NuxtImg :src="user.profileUrl" class="w-10 h-10 rounded-full" />
            </div>
            <div class="col-span-4 pr-2">
              <p class="w-48 text-sm line-clamp-1">Rituparna khadka</p>
              <p class="w-48 text-sm line-clamp-1">rituparnakhadka@gmail.com</p>
            </div>
          </div>
          <ul class="flex flex-col py-3 gap-y-1">
            <VUserProfileItem
              v-for="(item, index) in profileItems"
              :key="index"
              :item="item"
            />
          </ul>
          <div class="py-2 border-t-2">
            <ul class="flex flex-col">
              <VUserProfileItem :item="signOutItem" />
            </ul>
          </div>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script setup>
import {
  CogIcon,
  QuestionMarkCircleIcon,
  SunIcon,
  ArrowUturnUpIcon,
  ArrowLeftStartOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const profileItems = [
  {
    name: "Profile setting",
    href: "#",
    icon: CogIcon,
    urls: "#",
  },
  {
    name: "Help Center",
    href: "#",
    icon: QuestionMarkCircleIcon,
    urls: "#",
  },
  {
    name: "Dark Mode",
    href: "#",
    icon: SunIcon,
    urls: "#",
  },
  {
    name: "Upgrade Plan",
    href: "#",
    icon: ArrowUturnUpIcon,
    urls: "#",
  },
];

const signOutItem = {
  name: "Upgrade Plan",
  href: "#",
  icon: ArrowLeftStartOnRectangleIcon,
  urls: "#",
};
</script>
