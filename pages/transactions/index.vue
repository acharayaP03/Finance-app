<template>
    <div class="grid gap-4">
        <header class="flex items-start justify-between">
            <div class="grow">
                <p>View all your transactions here</p>
                <h1>Overview</h1>
            </div>
        </header>
        <Datatable :data :columns />
    </div>
</template>

<script lang="ts">
import { defineComponent, h, type VNode } from "vue";
import { columns } from "./columns";

interface Transaction {
    id: string;
    amount: number;
    status: string;
    email: string;
}

export default defineComponent({
    setup() {

        const data = ref<Transaction[]>([]);

        function generateRandomData(numObjects: number) {
            const statuses = ['pending', 'processing', 'completed'];
            const emails = ['example@gmail.com', 'm@example.com', 'test@example.com', 'user@example.com'];

            const randomData: Transaction[] = [];

            for (let i = 0; i < numObjects; i++) {
                const id = Math.random().toString(36).substring(2, 10);
                const amount = Math.floor(Math.random() * 500) + 50; // Random amount between 50 and 550
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                const email = emails[Math.floor(Math.random() * emails.length)];

                randomData.push({ id, amount, status, email });
            }
            return data.value = randomData;
        }

        onMounted(() => {
            generateRandomData(10);
        });
        return {
            data,
            columns
        };
    },
});
</script>