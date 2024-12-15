<template>
  <div class="flex items-start">
    <SideBar />
    <div class="flex flex-col h-screen w-full">
      <div class="p-8 ">
        <slot />
      </div>
      <footer class="mt-auto py-8 bg-slate-900 flex items-center justify-center flex-col">
        <div class="flex items-center justify-center w-full">
          <Icon name="uil:dollar-sign-alt" class="text-2xl text-green-500" />
          <h3 class="text-2xl text-slate-50">Finance</h3>
        </div>
        <span class="text-slate-50 font-medium text-xs mt-2">
          &copy; {{ new Date().getFullYear() }}, All rights reserved.
        </span>
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>