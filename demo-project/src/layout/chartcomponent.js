// import React, { useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// export default function ChartComponent() {

//   const user = {
//     followers: { length: 10 },
//     following: { length: 15 },
//   };

//   const chartlistdata = [
//     user.followers.length,
//     user.following.length,
//     20, // Search Appearances
//     25, // Post Impressions
//   ];

//   const total = chartlistdata.reduce((acc, value) => acc + value, 0);

//   const [chartData, setChartData] = useState({
//     labels: ["Followers", "Following", "Search Appearances", "Post Impression"],
//     datasets: [
//       {
//         data: chartlistdata,
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         top: 20,
//         bottom: 20,
//         left: 20,
//         right: 20,
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "User Engagement Chart",
//         font: {
//           size: 16,
//           weight: "bold",
//         },
//         padding: {
//           bottom: 20,
//         },
//       },
//       datalabels: {
//         color: "white",
//         font: {
//           weight: "bold",
//           size: 12,
//         },
//         formatter: (value, ctx) => {
//           const dataset = ctx.chart.data.datasets[0];
//           const sum = dataset.data.reduce((a, b) => a + b, 0);
//           const percentage = ((value / sum) * 100).toFixed(1) + "%";
//           return ctx.chart.data.labels[ctx.dataIndex] + "\n" + percentage;
//         },
//         textAlign: "center",
//         display: "auto",
//         clip: false,
//       },
//     },
//   };

//   return (
//     <div
//       className="chart-container"
//       style={{ width: "400px", height: "400px", margin: "auto" }}
//     >
//       <Doughnut data={chartData} options={options} />
// <div
//   style={{
//     position: "absolute",
//     top: "39%",
//     left: "75%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#000", // Black color for the central text
//   }}
// >
//   {total}
// </div>
//     </div>
//   );
// }
// -----------------------

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ChartComponent() {
  const user = {
    followers: { length: 10 },
    following: { length: 15 },
  };

  const chartlistdata = [
    user.followers.length,
    user.following.length,
    20, // Search Appearances
    25, // Post Impressions
  ];
  const total = chartlistdata.reduce((acc, value) => acc + value, 0);

  const [chartData, setChartData] = useState({
    labels: [
      "Followers",
      "Following",
      "Search Appearances",
      "Post Impressions",
    ],
    datasets: [
      {
        data: chartlistdata,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: "User Engagement Chart",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          bottom: 30,
        },
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 9,
        },
        formatter: (value, ctx) => {
          const dataset = ctx.chart.data.datasets[0];
          const sum = dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / sum) * 100).toFixed(1) + "%";
          return ctx.chart.data.labels[ctx.dataIndex] + ": " + percentage;
        },
        anchor: "end",
        align: "end",
        offset: 10,
        display: "auto",
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ width: "450px", height: "330px", margin: "auto" }}
    >
      <Doughnut data={chartData} options={options} />
      <div
        style={{
          position: "absolute",
          top: "31%",
          left: "78%",
          transform: "translate(-50%, -50%)",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {total}
      </div>
    </div>
  );
}
