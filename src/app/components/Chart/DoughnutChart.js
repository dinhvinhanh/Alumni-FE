import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './index.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data }) {
  const values = Object.values(data);
  const labels = Object.keys(data)
  console.log('doughnut__chart');
  const result = {
    labels: labels,
    datasets: [
      {
        label: 'Logs',
        data: values,
        backgroundColor: [
          '#db2b2b',
          '#319300',
          '#e59e1d',
          '#6bf532',
          '#ef6f5e',
        ],
        borderColor: [
          '#db2b2b',
          '#319300',
          '#e59e1d',
          '#6bf532',
          '#ef6f5e',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
      {/* <h1>Overview ~ { values.reduce((acc, value) => acc + value, 0) } records </h1> */}
      <div className='w-96 mx-auto'>
        <Doughnut data={result}  />
      </div>
    </>
  )
}
