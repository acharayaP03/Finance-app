<template>
  <div class="relative">
    <div
      class="flex items-center justify-center bg-transparent absolute top-6 right-0 h-8 w-8 border border-gray-300 rounded-lg rounded-r-none cursor-pointer hover:bg-gray-300 transoiton-all duration-300"
      @click="toggleSideBar"
    >
      <Icon name="uil:angle-left-b" class="text-xl" />
    </div>
    <div
      class="lg:flex w-[15rem] h-screen flex flex-col justify-between border-r"
    >
      <SideBarMenu />
      <div>User item</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const open = ref(false);
    const toggleSideBar = () => {
      console.log("toggle sidebar");
    };
    return { toggleSideBar };
  },
});
</script>
