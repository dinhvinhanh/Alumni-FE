import { ReactComponent as UploadIcon } from '../AlumniModal/assets/upload-icon.svg';

export default function Upload() {
  return (
  <div className="flex justify-center items-center w-full">
    <label htmlFor="dropzone-file"
           className="flex flex-col justify-center items-center w-full
                     h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed
                     cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700
                     hover:bg-gray-100 dark:border-gray-600
                     dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div className="flex flex-col justify-center items-center pt-5 pb-6">
        <UploadIcon />
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click để chọn file</span></p>
        <p className="text-xs text-gray-500 dark:text-gray-400">CSV, XLS or XLSX files</p>
      </div>
      <input id="dropzone-file" type="file" className="hidden" accept={'.xlsx, .xls, .csv'}/>
    </label>
  </div>
  );
};