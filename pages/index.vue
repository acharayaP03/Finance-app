<template>
    <div class="grid gap-4">
        <header class="flex items-start justify-between">
            <div class="grow">
                <p>Hi, welcome back XXXX!</p>
                <h1>Overview</h1>
            </div>
            <div class="w-[120px] h-8 bg-neutral-200"></div>
        </header>
        <main class="grid gap-2">
            <div class="flex items-center gap-4">
                <Tabs default-value="Today" class="w-full" @click="onTabChange">
                    <TabsList class="max-w-[400px]">
                        <TabsTrigger v-for="{ title } in list" :key="title" :value="title">
                            {{ title }}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent v-for="{ title, component } in list" :key="title" :value="title">
                        <!-- <component :is="component" :title /> -->
                        <highchart :options />
                    </TabsContent>
                </Tabs>
            </div>

            <section class="flex gap-2">
                <div class="w-full h-[200px] bg-neutral-200 " v-for="(item, index) in 3">
                </div>
            </section>

        </main>
        <footer>
            <p>Footer</p>
        </footer>
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

        let categories = ref({
            "today": [],
            "weekly": [],
            "yearly": [],
            "monthly": [],
        })
        let currentCategory = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

        const list = [
            {
                title: 'Today',
                component: resolveComponent('TabsToday')
            },
            {
                title: 'Week',
                component: resolveComponent('TabsWeekly')
            },
            {
                title: 'Month',
                component: resolveComponent('TabsWeekly')
            },
            {
                title: 'Year',
                component: resolveComponent('TabsWeekly')
            }
        ]
        const options = computed(() => {
            return {
                chart: {
                    type: 'line',
                    animation: {
                        enabled: false
                    }
                },
                title: {
                    text: ""
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    gridLineColor: 'transparent',
                    gridLineWidth: 0,
                    categories: currentCategory,
                    accessibility: {
                        description: 'Months of the year'
                    }
                },
                yAxis: {
                    gridLineColor: 'transparent',
                    gridLineWidth: 0,
                    title: {
                        text: ''
                    },
                    labels: {
                        format: '{value}°'
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                plotOptions: {
                    line: {
                        marker: {
                            enabled: false
                        },
                        enableMouseTracking: true,
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                series: [{
                    name: 'line',
                    allowPointSelect: false,
                    lineWidth: 3,
                    color: {
                        linearGradient: {},
                        stops: [
                            [0, 'rgba(252,176,69,1)'],
                            [0.33, 'rgba(253,29,29,1)'],
                            [0.66, 'rgba(131,58,180,1)'],
                            [1, 'rgba(29,217,83,1)']
                        ]
                    },
                    data: data.value
                }]
            }
        })


        function generateRandomData() {
            let values = [];
            for (let i = 0; i < 24; i++) {
                values.push(Math.floor(Math.random() * 100));
            }

            data.value = values;
            return values;
        }

        function onTabChange(e) {
            console.log(e.target)
            const innerText = e.target.innerText.ToLowerCase();
            // generateRandomData()
        }

        onMounted(() => {
            generateRandomData()
        })

        return {
            list,
            options,
            onTabChange
        }
    }
})


</script>
