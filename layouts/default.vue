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
        <div class="w-10 h-10">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton>
                <div
                  class="relative flex items-center w-10 h-10 place-content-center"
                >
                  <BellIcon class="w-10 h-10 text-gray-600" />
                  <span
                    class="w-5 h-5 top-0 flex items-center place-content-center p-1 bg-red-500 rounded-full text-[10px] text-white absolute"
                    >2+</span
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
                <div class="">
                  <ul class="flex flex-col">
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 cursor-pointer hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 cursor-pointer hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 cursor-pointer hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 cursor-pointer hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 cursor-pointer hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="grid grid-cols-6 px-2 pb-2 border-b-2 cursor-pointer hover:bg-gray-200"
                    >
                      <div class="flex items-center col-span-1">
                        <NuxtImg
                          src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                          class="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div
                        class="flex flex-col items-start col-span-5 pr-2 text-sm gap-y-[2px]"
                      >
                        <div>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur elit.
                            scelerisque enim</span
                          >
                        </div>
                        <div
                          class="flex flex-row-reverse justify-end text-gray-400"
                        >
                          <span> 2 hours ago</span>
                        </div>
                      </div>
                    </li>
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
          <!-- <div
            class="relative flex items-center w-10 h-10 place-content-center"
          >
            <BellIcon class="w-10 h-10 text-gray-600" />
            <span
              class="w-5 h-5 top-0 flex items-center place-content-center p-1 bg-red-500 rounded-full text-[10px] text-white absolute"
              >2+</span
            >
          </div> -->
        </div>
        <div class="h-10 bg-gray-100 border border-gray-200 w-60 rounded-xl">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton>
                <div class="relative z-10 grid h-10 grid-cols-12 w-60">
                  <div class="relative col-span-2">
                    <NuxtImg
                      src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                      class="absolute top-[20px] block rounded-full w-7 h-7 top-[5px] left-[5px]"
                    />
                  </div>
                  <div class="flex items-center col-span-9">
                    <p class="text-left line-clamp-1">
                      Rituparna Khadkatyth Khadka khadka the
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
                      <NuxtImg
                        src="https://i.ibb.co/KbjgHNM/52181501-2200547633342554-5268469947725512704-n.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div class="col-span-4 pr-2">
                      <p class="w-48 text-sm line-clamp-1">Rituparna khadka</p>
                      <p class="w-48 text-sm line-clamp-1">
                        rituparnakhadka@gmail.com
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col py-3 gap-y-1">
                    <li
                      class="flex px-2 py-2 cursor-pointer gap-x-3 hover:bg-slate-300"
                    >
                      <CogIcon class="w-6 h-6" />
                      <span> Profile setting</span>
                    </li>
                    <li
                      class="flex px-2 py-2 cursor-pointer gap-x-3 hover:bg-slate-300"
                    >
                      <QuestionMarkCircleIcon class="w-6 h-6" />
                      <span> Help Center</span>
                    </li>
                    <li
                      class="flex px-2 py-2 cursor-pointer gap-x-3 hover:bg-slate-300"
                    >
                      <SunIcon class="w-6 h-6" />
                      <span> Dark Mode</span>
                    </li>
                    <li
                      class="flex px-2 py-2 cursor-pointer gap-x-3 hover:bg-slate-300"
                    >
                      <ArrowUturnUpIcon class="w-6 h-6" />
                      <span> Upgrade Plan</span>
                    </li>
                  </ul>
                  <div class="py-2 border-t-2">
                    <ul class="flex flex-col">
                      <li
                        class="flex px-2 py-2 cursor-pointer gap-x-3 hover:bg-slate-300"
                      >
                        <ArrowLeftStartOnRectangleIcon class="w-6 h-6" />
                        <span> Sign Out</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
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
import {
  Bars3Icon,
  XMarkIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  SunIcon,
  ArrowUturnUpIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/vue/24/outline";
import { BellIcon } from "@heroicons/vue/24/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
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
