import Button from '@mui/material/Button';
import IntroImage from '../HeaderWrapper/assets/ugroup.png';
import { useHistory } from 'react-router-dom';

export default function IntroPage(){
  const history = useHistory();
  return (
      <div className="w-container justify-between mx-auto p-3 md:p-0">
        <div className={'flex justify-between relative'}>
          <div
            className={'flex justify-center flex-col'}
            style={{ width: '40%' }}
          >
            <h1 className={'font-bold text-2xl text-cyan-900 absolute md:relative top-5 md:top-0'}>Mạng lưới cựu sinh viên</h1>
            <p className={'text-cyan-800 my-4 md:my-6'}>
              Nắm bắt cơ hội giúp phát triển nghề nghiệp, tăng cường mối quan hệ, góp phần vào lợi ích chung của cộng đồng cựu sinh viên.
              Duy trì kết nối và tương tác mọi lúc, mọi nơi trên mọi thiết bị.
            </p>
            <Button variant="contained" onClick={() => history.push('/login')} className={'w-40 mt-2 p-2 bg-blue-600'}>Bắt đầu ngay</Button>
          </div>
          <div className={'flex items-center'} style={{height: '500px'}}>
            <img src={IntroImage} alt={''}/>
          </div>
        </div>
      </div>
  )
}