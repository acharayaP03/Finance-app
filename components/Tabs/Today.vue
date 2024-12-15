<template>
    <div>Tabs today</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { title = "today component" } = defineProps<{
    title?: string;
}>();

const loading = ref(false);

</script>