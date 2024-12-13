<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
    </header>
    <div class="px-4 grow">
      <div class="grid gap-4">
        <NuxtLink
          v-for="{ title, path, icon } in menuItems"
          :key="title"
          :href="path"
          class="flex items-center gap-2 transition rounded cursor-pointer hover:bg-neutral-100 px-2 py-2"
        >
          <Icon :name="icon" class="text-xl inline-block" />
          <span class="flex items-center gap-2 font-semibold text-slate-800">{{
            title
          }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const menuItems = ref([
      {
        title: "Overview",
        path: "/",
        icon: "uil:create-dashboard",
      },
      {
        title: "Transactions",
        path: "/transactions",
        icon: "uil:transaction",
      },
      {
        title: "Account",
        path: "/account",
        icon: "uil:user-circle",
      },
      {
        title: "Contact",
        path: "/contact",
        icon: "uil:phone-alt",
      },
      {
        title: "Settings",
        path: "/settings",
        icon: "uil:cog",
      },
    ]);
    return {
      menuItems,
    };
  },
});
</script>

<style scoped></style>
