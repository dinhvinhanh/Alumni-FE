import CustomInput from '../CustomInput';
import { useGetMyProfile, useGetProfile } from '../../../queries/alumni';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import dateFormat from 'dateformat';
import DraggableDialog from '../DraggableDialog';
import { useCreateAlumni, useDeleteAlumni, useUpdateAlumni, useUploadFile } from '../../../mutations/alumni';
import { Formik } from 'formik';
import config from '../../../config';

function formatDate(date) {
  try {
    return  dateFormat(date, 'dd-mm-yyyy')
  } catch (err) {
  }
  return date;
}

export default function ProfileForm({mode = 'edit', selectedId}) {
  const { data: myInfo } = useGetMyProfile();
  const { data: selectedUser } = useGetProfile(selectedId);
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const [openConfirm, setOpenConfirm] = useState(false);
  const deleteAlumni = useDeleteAlumni();
  const uploadFile = useUploadFile();
  const updateAlumni = useUpdateAlumni();
  const createAlumni = useCreateAlumni();

  const handleSelectedImage = (e) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const handleDeleteAlumni = async () => {
    await deleteAlumni.mutateAsync(profile.id);
    window.location.reload();
  }

  useEffect(() => {
    if (mode === 'edit' && !!myInfo) {
      setProfile(myInfo.data);
    }
  }, [myInfo])

  useEffect(() => {
    if (mode === 'add' && !!selectedId && !!selectedUser) {
      setProfile(selectedUser);
    }
  }, [selectedUser, selectedId])

  console.log(profile)

  return (
    <>
      {(Object.keys(profile).length > 0 || mode === 'addNew') && (
        <Formik
          initialValues={{
            id: profile.id,
            salaryRange: profile.salaryRange,
            status: profile.status,
            name: profile.name,
            avatar: profile.avatar,
            email: profile.email,
            gender: profile.gender,
            dateOfBirth: formatDate(profile.dateOfBirth),
          }}
          onSubmit={async (values, { setSubmitting }) => {
            let avatar = values.avatar
            if (file) {
              const res = await uploadFile.mutateAsync({ file });
              avatar = res.data.url;
            }
            if (mode === 'addNew') {
              await createAlumni.mutateAsync({ ...values, avatar })
            } else {
              await updateAlumni.mutateAsync({ ...values, avatar });
            }
            window.location.reload();
          }}
        >
          {({ values, errors, handleSubmit, resetForm, handleChange }) => (
            <form onSubmit={handleSubmit} className="mt-10 sm:mt-0">
              <div className="">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6 flex">
                      {mode === 'edit' && (<h1 className={'w-1/6 font-bold uppercase text-blue-800'}>Thông tin cá nhân</h1>)}
                      <div className="w-5/6 flex-1 grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <div className="block text-sm font-medium text-gray-700">Ảnh đại diện</div>
                          <div className="mt-3 flex items-center">
                      <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                        <Avatar alt={values.name} src={image || `${config.apiEndpoint}${values.avatar}`} className={'w-full h-full'}/>
                        <input type="file" accept={'image/*'} id="selectImage" hidden={true} onChange={handleSelectedImage}/>
                      </span>
                            <label htmlFor="selectImage"
                                   type="button"
                                   className="cursor-pointer ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Thay đổi
                            </label>
                          </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                          <div className="col-span-6 flex justify-between">
                            <div className={'col-span-2 w-72'}>
                              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Mã sinh viên
                              </label>
                              <CustomInput name={'id'} disabled={mode !== 'addNew'} className={'mt-3'} value={values.id} onChange={handleChange}/>
                            </div>
                            <div className={'col-span-4 w-96'}>
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Họ tên
                              </label>
                              <CustomInput name={'name'} className={'mt-3'} value={values.name} onChange={handleChange}/>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-4 mt-6">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                              Địa chỉ Email
                            </label>
                            <CustomInput name={'email'} className={'mt-3'} value={values.email} onChange={handleChange}/>
                          </div>

                          <div className="col-span-6 flex justify-between mt-6">
                            <div className={'col-span-2 w-96'}>
                              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Ngày sinh
                              </label>
                              <CustomInput name={'dateOfBirth'} onChange={handleChange} className={'mt-3'} value={values.dateOfBirth}/>
                            </div>
                            <div className={'col-span-4 w-72'}>
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Giới tính
                              </label>
                              <CustomInput name={'gender'} className={'mt-3'} value={values.gender} onChange={handleChange}/>
                            </div>
                          </div>

                          <div className="col-span-6 flex justify-between mt-6">
                            <div className={'col-span-2 w-96'}>
                              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Trạng thái công việc hiện tại
                              </label>
                              {/* <CustomInput name={'status'} className={'mt-3'} value={values.status} onChange={handleChange}/> */}
                              <select id="dropdown" type="text" name="status" className="form-select block w-full h-10 px-4 mb-2 border
                          border-gray-300 rounded-md appearance-none text-gray-600
                          sm:text-sm placeholder-gray-400 mt-3" placeholder="Your email address"
                                      onChange={handleChange}
                                      value={values.status}
                              >
                                <option disabled selected value={'Chưa làm khảo sát'}>Chọn công việc</option>
                                <option value={'Thực tập'}>Thực tập</option>
                                <option value={'Chưa đi làm'}>Chưa đi làm</option>
                                <option value={'Đã đi làm'}>Đã đi làm</option>
                                <option value={'Đã đi làm đúng ngành'}>Đã đi làm đúng chuyên ngành</option>
                              </select>
                            </div>
                            <div className={'col-span-4 w-72'}>
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Khoảng lương
                              </label>
                              {/* <CustomInput name={'salaryRange'} className={'mt-3'} onChange={handleChange} value={convertSalaryRange(values.salaryRange)}/> */}
                              <select id="dropdown" type="text" name="salaryRange" className="mt-3 form-select block w-full h-10 px-4 mb-2 border
                          border-gray-300 rounded-md appearance-none text-gray-600
                          sm:text-sm placeholder-gray-400" placeholder="Your email address"
                                      onChange={handleChange}
                                      value={values.salaryRange}
                              >
                                <option disabled selected value={'-1'}>Chọn khoảng lương</option>
                                <option value={'0'}>Dưới 5 triệu</option>
                                <option value={'1'}>Từ 5 đến 15 triệu</option>
                                <option value={'2'}>Từ 15 đến 30 triệu</option>
                                <option value={'3'}>Từ 30 đến 50 triệu</option>
                                <option value={'4'}>Trên 50 triệu</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      {mode === 'add' && !!selectedId && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenConfirm(true)
                          }}
                          type="submit"
                          className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Xóa
                        </button>
                      )}

                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Lưu lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>)}


      {mode === 'edit' && (<div className="mt-10 sm:mt-10">
        <div className="">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <h1 className={'font-bold uppercase text-blue-800'}>Đổi mật khẩu</h1>
                    <div className="col-span-6 sm:col-span-4">
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Mật khẩu cũ
                        </label>
                        <CustomInput className={'mt-3'} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 mt-6">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Mật khẩu mới
                        </label>
                        <CustomInput className={'mt-3'} />
                      </div>

                      <div className="col-span-6 sm:col-span-4 mt-6">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Nhập lại mật khẩu
                        </label>
                        <CustomInput className={'mt-3'} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Lưu lại
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>)}

      <DraggableDialog
        open={openConfirm}
        handleClose={() => setOpenConfirm(false)}
        handleConfirm={handleDeleteAlumni}
        title={'Xác nhận xóa thông tin cựu sinh viên này'}
        description={'Khi xác nhận dữ liệu sẽ bị xóa vĩnh viễn tại máy chủ, không thể phục hồi.'}
      />
    </>
  )
}