"use client"

import React from "react"
import { Chart as ChartJS, TimeScale, LinearScale, LineElement, PointElement, Tooltip, Legend, ChartOptions, Filler } from "chart.js"
import { Line } from "react-chartjs-2"
import "chartjs-adapter-date-fns"
import { ja } from "date-fns/locale"

ChartJS.register(TimeScale, LinearScale, LineElement, PointElement, Tooltip, Legend, Filler)

const LineChart = () => {
  const dataChart = {
    labels: [
      new Date("2024-01-01"),
      new Date("2024-02-02"),
      new Date("2024-03-03"),
      new Date("2024-04-04"),
      new Date("2024-05-05"),
      new Date("2024-06-06"),
      new Date("2024-07-07"),
      new Date("2024-08-08"),
      new Date("2024-09-09"),
      new Date("2024-10-10"),
      new Date("2024-11-11"),
      new Date("2024-12-12"),
    ],
    datasets: [
      {
        label: "",
        data: [32, 34, 54, 34, 23, 12, 32, 54, 23, 14, 42, 23],
        fill: false,
        borderColor: "#FFCC21",
        borderWidth: 3,
        pointRadius: 3,
      },
      {
        label: "",
        data: [32, 34, 65, 23, 65, 43, 12, 34, 21, 54, 23, 7],
        fill: false,
        borderColor: "#8FE9D0",
        borderWidth: 3,
        pointRadius: 3,
      },
    ],
  }

  const options: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    stacked: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "M月",
          },
          tooltipFormat: "dd M月 yyyy",
        },
        adapters: {
          date: {
            locale: ja,
          },
        },
        border: {
          display: false,
        },
        grid: {
          color: "#777777",
        },
        ticks: {
          color: "#fff",
          padding: 10,
          align: "center",
          source: "data",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#2E2E2E",
          drawOnChartArea: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          color: "#2E2E2E",
        },
      },
    },
  }

  return (
    <div className="bg-[var(--color-dark-600)] px-4 py-2 h-full">
      <Line
        options={options}
        data={dataChart}
        redraw={true}
      />
    </div>
  )
}

export default LineChart
