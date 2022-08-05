import { Formik } from 'formik';
import { useGetMyProfile } from 'queries/alumni';
import { useSaveSurvey } from '../../../mutations/alumni';
import ResultModal from '../../components/ResultModal';

export default function SurveyControl() {
  const { data: profile } = useGetMyProfile();
  const saveSurvey = useSaveSurvey();

  return (
    <>
      {profile && (
        <Formik
          initialValues={{
            id: profile.data.id,
            salaryRange: '-1',
            workplace: '',
            status: '',
            satisfactionLevel: '',
            language: [],
            feedback: '',
            name: profile.data.name
          }}
          onSubmit={(values, { setSubmitting }) => {
            values.language = values.language.join(', ');
            saveSurvey.mutate(values);
          }}
        >
          {({ values, errors, handleSubmit, resetForm, handleChange }) => (
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
              <div className="relative">
                <div className="px-10 py-10 bg-white shadow-md rounded-3xl sm:p-10">
                  <div className="mx-auto">
                    <div className="font-sans text-gray-700 space-y-6 sm:leading-7 text-center antialiased">
                      <h1 id="title" className="text-3xl font-semibold">Khảo sát cựu sinh viên</h1>
                      <p id="description" className="text-lg">Vui lòng dành ít phút để khảo sát</p>
                    </div>
                    <form id="survey-form" onSubmit={handleSubmit}>

                      <div className="grid grid-cols-6 gap-6 pt-8">
                        <div className="col-span-6 sm:col-span-3">

                          <label htmlFor="first_name" className="block text-sm font-medium text-gray-600">
                            Họ tên
                          </label>
                          <div className="mt-1 flex rounded-md">
                            <input disabled={true} id="first_name" type="text" name="name"
                                   className="form-input block w-full h-10 px-4 mb-2 border
                                    border-gray-300 rounded-md
                                    sm:text-sm placeholder-gray-400" placeholder="Tên của bạn"

                                   value={values.name}
                            />
                          </div>

                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label id="name-label" htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Mã sinh viên
                          </label>
                          <div className="mt-1 flex rounded-md">
                            <input id="name" type="text" name="id"
                             className="form-input block w-full h-10 px-4 mb-2 border
                                border-gray-300 rounded-md
                                sm:text-sm placeholder-gray-400" placeholder="Nhập mã sinh viên"

                             value={values.id}
                                   disabled={true}
                            />
                          </div>

                        </div>

                        <div className="col-span-6 sm:col-span-3">

                          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Công việc hiện tại
                          </label>
                          <div className="mt-1 rounded-md">
                            <div className="relative">
                              <select id="dropdown" type="text" name="status" className="form-select block w-full h-10 px-4 mb-2 border
                          border-gray-300 rounded-md appearance-none text-gray-600
                          sm:text-sm placeholder-gray-400" placeholder="Your email address"
                              onChange={handleChange}
                              >
                                <option disabled selected value={'Chưa làm khảo sát'}>Chọn công việc</option>
                                <option value={'Thực tập'}>Thực tập</option>
                                <option value={'Chưa đi làm'}>Chưa đi làm</option>
                                <option value={'Đã đi làm'}>Đã đi làm</option>
                                <option value={'Đã đi làm đúng ngành'}>Đã đi làm đúng chuyên ngành</option>
                              </select>
                            </div>
                          </div>

                        </div>

                        <div className="col-span-6 sm:col-span-3">

                          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Khoảng lương
                          </label>
                          <div className="mt-1 rounded-md">
                            <div className="relative">
                              <select id="dropdown" type="text" name="salaryRange" className="form-select block w-full h-10 px-4 mb-2 border
                          border-gray-300 rounded-md appearance-none text-gray-600
                          sm:text-sm placeholder-gray-400" placeholder="Your email address"
                              onChange={handleChange}
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

                        <div className="col-span-6 sm:col-span-6">
                          <label id="workplace" htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Tên công ty hiện tại
                          </label>
                          <div className="mt-1 flex rounded-md">
                            <input id="workplace" type="text" name="workplace" className="form-input block w-full h-10 px-4 mb-2 border
                        border-gray-300 rounded-md
                        sm:text-sm placeholder-gray-400" placeholder="Nhập tên công ty"
                            value={values.workplace}
                                   onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-6 mt-2">
                          <fieldset>
                            <legend className="text-base font-medium text-gray-700">Mức độ hài lòng của bạn về công việc
                            </legend>
                            <div className="mt-4 space-y-4">

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments1" name="satisfactionLevel" type="radio" value="Hài lòng"
                                        onChange={handleChange}
                                         className="form-radio h-4 w-4 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments1" className="font-medium text-gray-700">Hài lòng</label>
                                </div>
                              </div>

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments2" name="satisfactionLevel" type="radio" value="Tạm ổn"
                                         className="form-radio h-4 w-4 border-gray-300 rounded"
                                         onChange={handleChange}
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments2" className="font-medium text-gray-700">Tạm ổn</label>
                                </div>
                              </div>

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments3" name="satisfactionLevel" type="radio" value="Không hài lòng"
                                         className="form-radio h-4 w-4 border-gray-300 rounded"
                                         onChange={handleChange}
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments3" className="font-medium text-gray-700">Không hài lòng</label>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        <div className="col-span-6 sm:col-span-6 mt-2">
                          <fieldset>
                            <legend className="text-base font-medium text-gray-700">Xin cho biết ngoại ngữ bạn sử dụng trong công việc.
                            </legend>
                            <p className="text-sm text-gray-500">Có thể chọn nhiều đáp án</p>
                            <div className="mt-4 space-y-4">

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments6" name="language" type="checkbox" value="Tiếng anh"
                                         className="h-4 w-4 border-gray-300 rounded"
                                         onChange={handleChange}
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments6" className="font-medium text-gray-700">Tiếng anh </label>
                                  {/* <p className="text-gray-500">Things like HTML, CSS, JS or React</p> */}
                                </div>
                              </div>

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments5" name="language" type="checkbox" value="Tiếng nhật"
                                         onChange={handleChange}
                                         className="h-4 w-4 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments5" className="font-medium text-gray-700">Tiếng nhật</label>
                                  {/* <p className="text-gray-500">APIs and Microservices with NodeJS, Express</p> */}
                                </div>
                              </div>

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments9" name="language" type="checkbox" value="Tiếng trung"
                                         onChange={handleChange}
                                         className="h-4 w-4 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments9" className="font-medium text-gray-700">Tiếng trung</label>
                                  {/* <p className="text-gray-500">The complete Stack for an End-to-End understanding</p> */}
                                </div>
                              </div>

                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="comments8" name="language" type="checkbox" value="Ngôn ngữ khác"
                                         onChange={handleChange}
                                         className="h-4 w-4 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments8" className="font-medium text-gray-700">Ngôn ngữ khác</label>
                                  {/* <p className="text-gray-500">The complete Stack for an End-to-End understanding</p> */}
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        <div className="col-span-6 sm:col-span-6 mt-2">
                          <label id="textarea" htmlFor="feedback" className="block text-sm font-medium text-gray-600">
                            Bạn có phản hồi nào khác không?
                          </label>
                          <div className="mt-1 flex rounded-md">
                            <textarea
                              id="feedback"
                              rows="3"
                              name="feedback"
                              className="form-textarea w-full h-20 px-2 py-2 mb-2 appearance-none border border-gray-300 rounded-md sm:text-sm placeholder-gray-400"
                              onChange={handleChange}
                            >
                            </textarea>
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-2 mt-2">
                          <button type="submit" id="submit"
                                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Gửi
                          </button>
                        </div>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      )}
      {saveSurvey && saveSurvey.isSuccess && <ResultModal type={'success'} reload={true} /> }
      {saveSurvey && saveSurvey.isError && <ResultModal /> }
    </>
  )
}