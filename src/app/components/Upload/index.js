import { ReactComponent as UploadIcon } from '../../containers/AlumniModal/assets/upload-icon.svg';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import SuccessIcon from './assets/success.png';
import ErrorIcon from './assets/error.png';
import { useUploadAlumniCsv } from 'mutations/alumni';
import { useHistory } from 'react-router-dom';

export default function Upload() {
  const [file, setFile] = useState(null);
  const { mutateAsync, isLoading, isSuccess, isError, error } = useUploadAlumniCsv();
  const history = useHistory();

  const handleSelectedFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleUpload = async () => {
    try {
      await mutateAsync({ file: file});
      history.push('/admin/cuu-sinh-vien');
    } catch (e) {

    }
  }

  return (
    <div>
      {!file && !isLoading && (
        <div className="flex justify-center items-center w-full">
            <label htmlFor="dropzone-file"
                        className="flex flex-col justify-center items-center w-full
                           h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed
                           cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700
                           hover:bg-gray-100 dark:border-gray-600
                           dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <UploadIcon />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click để chọn file</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">CSV, XLS or XLSX files</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" accept={'.xlsx, .xls, .csv'}
                     onChange={handleSelectedFile} />
            </label>
        </div>
      )}
      {file && !isLoading && !isSuccess && !isError && (
        <div>
          <div className={'flex'}>
            <h1>Bạn đã chọn file: </h1>
            <h1 className={'font-bold ml-4'}>{file.name}</h1>
          </div>
          <div className="flex justify-end mt-6">
            <Button variant="outlined" onClick={() => setFile(null)}>Chọn file khác</Button>
            <Button variant="contained" className={'bg-blue-500 ml-6'} onClick={handleUpload}>Tải lên</Button>
          </div>
        </div>
      )}
      {file && isLoading && (
        <div>
          <h1 className={'mb-4'}>Đang tải file lên...</h1>
          <LinearProgress />
        </div>
      )}
      {file && !isLoading && isSuccess && (
        <div>
          <img src={SuccessIcon} alt={''} className={'w-56 mx-auto'}/>
          <h1 className={'mb-4 text-center font-bold text-2xl text-green-600'}>Thành công !</h1>
        </div>
      )}
      {file && !isLoading && isError && (
        <div>
          <img src={ErrorIcon} alt={''} className={'w-56 mx-auto mb-3'}/>
          <h1 className={'mb-4 text-center font-bold text-2xl text-red-600'}>Tải lên thất bại!</h1>
        </div>
      )}
    </div>
  );
};