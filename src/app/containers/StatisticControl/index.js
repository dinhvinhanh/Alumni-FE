import { DoughnutChart } from 'app/components/Chart';
import { Helmet } from 'react-helmet-async';
import { useStatisticAlumniSalaryRange, useStatisticAlumniStatus } from 'queries/alumni';

export default function StatisticControl() {
  const { data: statusData } = useStatisticAlumniStatus();
  const { data: salaryData } = useStatisticAlumniSalaryRange();

  return (
    <div className={'flex justify-evenly'}>
      <Helmet>
        <title>Thống kê</title>
      </Helmet>
      <div>
        <h1 className={'font-bold text-2xl mb-4 text-blue-800'}>Thống kê việc làm của cựu sinh viên</h1>
        <DoughnutChart data={statusData ? statusData.data : {}}/>
      </div>
      <div>
        <h1 className={'font-bold text-2xl mb-4 text-blue-800'}>Thống kê việc theo khoảng lương</h1>
        <DoughnutChart data={salaryData ? salaryData.data : {}} type={'salary-range'}/>
      </div>
    </div>
  )
}