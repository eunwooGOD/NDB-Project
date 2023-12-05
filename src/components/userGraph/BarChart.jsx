import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const BarChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    // Chart.js configuration
    const data = {
      labels: [
        'Java',
        'Python',
        'JavaScript',
        'C+',
        'C++',
        'Node',
        'MySQL',
        'Oracle',
      ],
      datasets: [
        {
          label: '사용자 언어',
          data: [10, 20, 15, 25, 20, 10, 5, 8],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    }

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }

    // Get the chart context
    const ctx = chartRef.current.getContext('2d')

    // Check if a chart instance already exists
    if (chartRef.current.chart) {
      // Destroy the existing chart
      chartRef.current.chart.destroy()
    }

    // Create the new chart
    chartRef.current.chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    })
  }, [])

  return (
    <div>
      <div className="w-[70rem] h-[10rem] bg-white/90 rounded-md mt-20 mb-10">
        <div className="w-full h-10 bg-blue-600 rounded-t-md p-3">
          <span className="">학습 시간</span>
        </div>
        <img src="src/assets/login/test.png" alt="" />
      </div>
      <div className="p-10 bg-white/90  shadow-lg rounded-lg shadow-white/30">
        <div style={{ width: '65rem' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  )
}

export default BarChart
