<template>
  <div class="border rounded-sm p-4" v-if="data.length">
    <highchart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { data = [], currentCategory = '' } = defineProps<{
  currentCategory?: string;
  data: number[]
}>();

let categories = ref<{ [key: string]: string[] }>({
  today: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00"
  ],
  week: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],
  year: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
})

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
      gridLineWidth: 1,
      categories: categories.value[currentCategory],
      accessibility: {
        description: 'Months of the year'
      }
    },
    yAxis: {
      gridLineWidth: 1,
      title: {
        text: ''
      },
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
      data
    }]
  }
})

function generateMonth() {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1; // Current month (1 for January, 2 for February, etc.)
  let currentYear = currentDate.getFullYear(); // Current year

  function generateMonthDates() {
    let monthDates = [];
    let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      let dayString = ("0" + i).slice(-2); // Format day with two digits (01, 02, ..., 31)
      let monthString = ("0" + currentMonth).slice(-2); // Format month with two digits (01, 02, ..., 12)
      monthDates.push(monthString + "/" + dayString);
    }

    return monthDates;
  }

  let month = generateMonthDates();
  categories.value = ({ ...categories.value, month })
  return month;
}


onMounted(() => generateMonth)
</script>