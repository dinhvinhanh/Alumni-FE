import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './index.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart(props) {
  const overview = []
  const values = [35, 15, 50]
  const labels = ['Chưa có việc làm', 'Đã có việc làm', 'Chưa tham gia khảo sát']
  console.log('doughnut__chart');
  const data = {
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
        <Doughnut data={data}  />
      </div>
    </>
  )
}
