import { DoughnutChart } from 'app/components/Chart';
import { Helmet } from 'react-helmet-async';

export default function StatisticControl() {
  return (
    <div>
      <Helmet>
        <title>Thống kê</title>
      </Helmet>
      <div>
        <h1 className={'font-bold text-2xl mb-4 text-blue-800'}>Thống kê việc làm của cựu sinh viên</h1>
        <DoughnutChart />
      </div>
    </div>
  )
}