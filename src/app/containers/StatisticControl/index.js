import { DoughnutChart } from 'app/components/Chart';
import { Helmet } from 'react-helmet-async';
import { useStatisticAlumniStatus } from 'queries/alumni';

export default function StatisticControl() {
  const { data } = useStatisticAlumniStatus(['Chưa làm khảo sát','Đã đi làm đúng ngành','Đã đi làm','Thực tập','Chưa đi làm']);

  return (
    <div>
      <Helmet>
        <title>Thống kê</title>
      </Helmet>
      <div>
        <h1 className={'font-bold text-2xl mb-4 text-blue-800'}>Thống kê việc làm của cựu sinh viên</h1>
        <DoughnutChart data={data ? data.data : {}}/>
      </div>
    </div>
  )
}