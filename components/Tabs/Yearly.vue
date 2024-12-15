<template>
  <div>{{ title }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { title= "Yearly" } = defineProps<{
  title?: string;
}>();

const loading = ref(false);

</script>