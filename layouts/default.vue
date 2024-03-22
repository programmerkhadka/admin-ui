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
          <li v-for="(items, index) in menuItems">
            <a
              href="#"
              class="relative flex py-3 pl-3 hover:bg-slate-300"
              @click="openItems = !openItems"
              ><span>{{ items.text }}</span>
              <ChevronDownIcon
                class="absolute w-6 h-6 right-1"
                v-if="items.children.length"
              />
            </a>
            <ul
              class="flex flex-col transition-[height] duration-150 ease-in-out overflow-hidden"
              :class="openItems ? 'h-auto' : 'h-0'"
              v-if="items.children.length"
            >
              <li v-for="(subItems, index) in items.children">
                <a
                  href="#"
                  class="relative flex py-3 pl-6 hover:bg-slate-300"
                  @click="openSubItems = !openSubItems"
                >
                  <span>{{ subItems.text }}</span>
                  <ChevronDownIcon
                    class="absolute w-6 h-6 right-1"
                    v-if="subItems.children.length"
                /></a>
                <ul
                  class="flex flex-col overflow-hidden"
                  v-for="(subsubItems, indxe) in subItems.children"
                  v-if="subItems.children.length"
                  :class="openSubItems ? 'h-auto' : 'h-0'"
                >
                  <li>
                    <a
                      href="#"
                      class="relative flex py-3 pl-8 hover:bg-slate-300"
                      @click="openSubSubItems = !openSubSubItems"
                      ><span> {{ subsubItems.text }}</span>
                      <ChevronDownIcon
                        class="absolute w-6 h-6 right-1"
                        v-if="subsubItems.children.length"
                      />
                    </a>
                    <ul
                      class="flex flex-col transition-[height] duration-150 ease-in-out overflow-hidden"
                      v-for="(subsubsubItems, indxe) in subsubItems.children"
                      v-if="subsubItems.children.length"
                      :class="openSubSubItems ? 'h-auto' : 'h-0'"
                    >
                      <li>
                        <a
                          href="#"
                          class="relative flex py-3 pl-10 hover:bg-slate-300"
                          ><span> {{ subsubsubItems.text }}</span></a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
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

const openItems = ref(false);
const openSubItems = ref(false);
const openSubSubItems = ref(false);
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

const menuItems = [
  {
    text: "Application",
    slug: "application",
    href: "",
    icon: "",
    title: "Application",
    children: [
      {
        text: "- Mobile",
        slug: "mobile",
        href: "",
        icon: "",
        title: "- Mobile",
        children: [
          {
            text: "-- Social Media",
            slug: "social-media",
            href: "",
            icon: "",
            title: "-- Social Media",
            children: [],
          },
          {
            text: "-- Security",
            slug: "security",
            href: "",
            icon: "",
            title: "-- Security",
            children: [],
          },
          {
            text: "-- Project",
            slug: "project",
            href: "",
            icon: "",
            title: "-- Project",
            children: [],
          },
          {
            text: "-- Hardware",
            slug: "hardware",
            href: "",
            icon: "",
            title: "-- Hardware",
            children: [],
          },
          {
            text: "-- Activity",
            slug: "activity",
            href: "",
            icon: "",
            title: "- Activity",
            children: [
              {
                text: "--- Social Media",
                slug: "social-media",
                href: "",
                icon: "",
                title: "--- Social Media",
                children: [],
              },
              {
                text: "--- Security",
                slug: "security",
                href: "",
                icon: "",
                title: "- Security",
                children: [],
              },
              {
                text: "--- Project",
                slug: "project",
                href: "",
                icon: "",
                title: "--- Project",
                children: [],
              },
              {
                text: "--- Hardware",
                slug: "hardware",
                href: "",
                icon: "",
                title: "--- Hardware",
                children: [],
              },
              {
                text: "--- Activity",
                slug: "activity",
                href: "",
                icon: "",
                title: "--- Activity",
                children: [],
              },
            ],
          },
        ],
      },
      {
        text: "- Technology",
        slug: "technology",
        href: "",
        icon: "",
        title: "- Technology",
        children: [],
      },
      {
        text: "- Game",
        slug: "game",
        href: "",
        icon: "",
        title: "- Game",
        children: [],
      },
      {
        text: "- Software",
        slug: "software",
        href: "",
        icon: "",
        title: "- Software",
        children: [],
      },
      {
        text: "- Internet",
        slug: "internet",
        href: "",
        icon: "",
        title: "- Internet",
        children: [],
      },
    ],
  },
];
</script>
