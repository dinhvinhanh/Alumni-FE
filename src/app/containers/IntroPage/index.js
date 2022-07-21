import Button from '@mui/material/Button';
import IntroImage from '../HeaderWrapper/assets/ugroup.png';

export default function IntroPage(){
  return (
      <div className="w-container justify-between mx-auto">
        <div className={'flex justify-between'}>
          <div
            className={'flex justify-center flex-col'}
            style={{ width: '40%' }}
          >
            <h1 className={'font-bold text-2xl text-cyan-900'}>Mạng lưới cựu sinh viên</h1>
            <p className={'text-cyan-800 my-6'}>
              Nắm bắt cơ hội giúp phát triển nghề nghiệp, tăng cường mối quan hệ, góp phần vào lợi ích chung của cộng đồng cựu sinh viên.
              Duy trì kết nối và tương tác mọi lúc, mọi nơi trên mọi thiết bị.
            </p>
            <Button variant="contained" className={'w-40 mt-2 p-2 bg-blue-600'}>Bắt đầu ngay</Button>
          </div>
          <div className={'flex items-center'} style={{height: '500px'}}>
            <img src={IntroImage} alt={''}/>
          </div>
        </div>
      </div>
  )
}