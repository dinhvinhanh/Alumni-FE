import CustomInput from '../CustomInput';

export default function ProfileForm({mode = 'edit'}) {

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6 flex">
                  {mode === 'edit' && (<h1 className={'w-1/6 font-bold uppercase text-blue-800'}>Thông tin cá nhân</h1>)}
                  <div className="w-5/6 flex-1 grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <div className="block text-sm font-medium text-gray-700">Ảnh đại diện</div>
                      <div className="mt-3 flex items-center">
                      <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                        <button
                          type="button"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Thay đổi
                        </button>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Mã sinh viên
                        </label>
                        <CustomInput className={'mt-3'}/>
                      </div>

                      <div className="col-span-6 sm:col-span-3 mt-6">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Họ tên
                        </label>
                        <CustomInput className={'mt-3'}/>
                      </div>

                      <div className="col-span-6 sm:col-span-4 mt-6">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <CustomInput className={'mt-3'}/>
                      </div>

                      <div className="col-span-6 sm:col-span-3 mt-6">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <CustomInput className={'mt-3'}/>
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
      </div>

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
    </>
  )
}