<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <p>{{ card.title }}</p>
        <Badge class="bg-green-500 rounded-full">{{ card.progression }}&nbsp;%</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent class="flex items-center justify-end px-4 pt-0 pb-2 border-b">
      <div class="text-[48px] font-[800]">
        <span class="text-neutral-300">$</span>
        <span class="text-black">{{ card.amount }}</span>
      </div>
    </CardContent>
    <CardFooter class="flex items-center justify-between gap-2 px-2 py-2">
      <div class="flex items-center justify-center w-8 h-8 rounded bg-neutral-100">
        <Icon size="20" :name="card.icon" color="black" />
      </div>
      <p class="text-xs grow">{{ card.description }}</p>
      <Button variant="outline">{{ card.label }}</Button>
    </CardFooter>
  </Card>
</template>
<script lang="ts" setup>
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface ICard {
  title: string,
  progression: number,
  label: string,
  amount: number,
  description: string,
  icon: string
}

const { card } = defineProps<{ card: ICard }>()
</script>