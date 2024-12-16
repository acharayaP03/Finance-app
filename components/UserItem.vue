<template>
    <div class="p-4">
        <div class="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 rounded p-2">
            <div class="bg-slate-900 h-10 w-10 rounded-full flex items-center justify-center font-bold text-white">{{
                initial }}</div>
            <div class="flex flex-col">

                <p class="text-slate-800 text-sm font-bold">{{ name }}</p>
                <span class="text-xs mt-1 text-slate-500 capitalize">full stack developer</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { name = "Trishten ac" } = defineProps<{
    name?: string;
}>();

const initial = computed(() => {
    return name.charAt(0).toUpperCase();
});
</script>