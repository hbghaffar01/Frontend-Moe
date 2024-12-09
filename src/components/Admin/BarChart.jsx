import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "1-Mon",
    "2-Tue",
    "3-Wed",
    "4-Thu",
    "5-Fri",
    "6-Sat",
    "7-Sun",
    "8-Mon",
    "9-Tue",
    "10-Wed",
  ],
  datasets: [
    {
      label: "On-Time",
      data: [75, 103, 92, 112, 89, 38, 48, 94, 83, 114],
      backgroundColor: "rgba(78, 97, 218)",
      borderColor: "rgba(78, 97, 218)",
      barThickness: 15,
      borderRadius: 5,
    },
    {
      label: "Late",
      data: [32, 19, 17, 10, 30, 5, 0, 29, 15, 37],
      backgroundColor: "rgba(89, 195, 235)",
      borderColor: "rgba(89, 195, 235)",
      barThickness: 15,
      borderRadius: 5,
    },
  ],
};

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredData = data.datasets.map((dataset) => ({
    ...dataset,
    data: dataset.data,
  }));

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="rounded-md border p-2"
        >
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="rounded-md border p-2"
        >
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <Bar
        data={{ ...data, datasets: filteredData }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                pointRadius: 5,
              },
            },
            afterDatasetsDraw: (chart) => {
              const ctx = chart.ctx;
              chart.data.datasets.forEach((dataset, i) => {
                ctx.fillStyle = "red";
                dataset.data.forEach((value, j) => {
                  const meta = chart.getDatasetMeta(i);
                  if (!meta.hidden) {
                    ctx.beginPath();
                    ctx.arc(
                      meta.data[j].x,
                      meta.data[j].y - 20,
                      5,
                      0,
                      Math.PI * 2
                    );
                    ctx.fill();
                  }
                });
              });
            },
          },
        }}
      />
    </div>
  );
}
