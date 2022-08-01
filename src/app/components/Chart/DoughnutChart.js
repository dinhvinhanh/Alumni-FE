import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './index.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data, type = '' }) {
  const values = Object.values(data);
  const labels = useMemo(() => {
    const result = Object.keys(data);
    if (type === 'salary-range') {
      return result.map(value => {
        switch (value) {
          case '-1':
            return 'Chưa làm khảo sát';
          case '0':
            return 'Dưới 5 triệu';
          case '1':
            return 'Từ 5 đến 15 triệu';
          case '2':
            return 'Từ 15 đến 30 triệu';
          case '3':
            return 'Từ 30 đến 50 triệu';
          case '4':
            return 'Trên 50 triệu';
        }
      })
    }
     return result;
  }, [data])

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
