<template>
    <div class="grid gap-4">
        <header class="flex items-start justify-between">
            <div class="grow">
                <p>Hi, welcome back XXXX!</p>
                <h1>Overview</h1>
            </div>
            <ProductNew />
        </header>
        <main class="grid gap-2">
            <div class="flex items-center gap-4">
                <Tabs default-value="Today" class="w-full" @click="onTabChange($event)">
                    <TabsList class="max-w-[400px]">
                        <TabsTrigger v-for="{ title } in list" :key="title" :value="title">
                            {{ title }}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent v-for="{ title } in list" :key="title" :value="title" v-if="data.length">
                        <Charts :="{ currentCategory, data }" v-if="data.length" />
                    </TabsContent>
                </Tabs>
            </div>

            <section class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <Cards class="" v-for="(item, index) in cards" :card="item" :key="index" />
            </section>

        </main>

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


export default defineComponent({
    components: {
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    },
    setup() {
        const data = ref<number[]>([])
        let currentCategory = ref<string>('today')

        const cards = [
            {
                title: "Sales",
                progression: 12,
                label: "View sales",
                amount: 30021.12,
                description: 'Sales of December 2024',
                icon: 'uil:ticket'
            },
            {
                title: "Refunds",
                progression: 8,
                label: "View Refunds",
                amount: 1002.02,
                description: 'Refunds till date',
                icon: 'uil:receipt'
            },
            {
                title: "Payouts",
                progression: 14,
                label: "View payouts",
                amount: 899.32,
                description: 'Payouts of this week',
                icon: 'uil:money-bill'
            }
        ]

        const list = [
            {
                title: 'Today',
            },
            {
                title: 'Week',
            },
            {
                title: 'Month',
            },
            {
                title: 'Year',
            }
        ]

        function generateRandomData(number = 7) {
            let values = [];
            for (let i = 0; i < number + 1; i++) {
                values.push(Math.floor(Math.random() * 100));
            }

            data.value = values;
            return values;
        }

        function onTabChange(e: Event) {
            const target = e.target as HTMLElement;
            const innerText = target?.innerText.toLowerCase();


            currentCategory.value = innerText;

            switch (innerText) {
                case 'today':
                    generateRandomData(23)
                    break;
                case 'week':
                    generateRandomData(6)
                    break;
                case 'month':
                    generateRandomData(30)
                    break;
                case 'year':
                    generateRandomData(11)
                    break;

                default:
                    generateRandomData(23)
            }
        }

        onMounted(() => {
            generateRandomData(23)
        })

        return {
            list,
            currentCategory,
            data,
            cards,
            onTabChange
        }
    }
})


</script>
