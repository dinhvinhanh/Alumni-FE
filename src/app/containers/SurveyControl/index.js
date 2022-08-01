export default function SurveyControl() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="relative">
        <div className="px-10 py-10 bg-white shadow-md rounded-3xl sm:p-10">
          <div className="mx-auto">
            <div className="font-sans text-gray-700 space-y-6 sm:leading-7 text-center antialiased">
              <h1 id="title" className="text-3xl font-semibold">Khảo sát cựu sinh viên</h1>
              <p id="description" className="text-lg">Vui lòng giành ít phút để khảo sát</p>
            </div>
            <form id="survey-form" action="#">

              <div className="grid grid-cols-6 gap-6 pt-8">
                <div className="col-span-6 sm:col-span-3">

                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-600">
                    Họ tên
                  </label>
                  <div className="mt-1 flex rounded-md">
                    <input id="first_name" type="text" name="name" className="form-input block w-full h-10 px-4 mb-2 border
                        border-gray-300 rounded-md
                        sm:text-sm placeholder-gray-400" placeholder="Tên của bạn" required></input>
                  </div>

                </div>

                <div className="col-span-6 sm:col-span-3">

                  <label id="name-label" htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Mã sinh viên
                  </label>
                  <div className="mt-1 flex rounded-md">
                    <input id="name" type="text" name="name" className="form-input block w-full h-10 px-4 mb-2 border
                  border-gray-300 rounded-md
                  sm:text-sm placeholder-gray-400" placeholder="Nhập mã sinh viên" required></input>
                  </div>

                </div>

                <div className="col-span-6 sm:col-span-3">

                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Công việc hiện tại
                  </label>
                  <div className="mt-1 rounded-md">
                    <div className="relative">
                      <select id="dropdown" type="text" name="name" className="form-select block w-full h-10 px-4 mb-2 border
                          border-gray-300 rounded-md appearance-none text-gray-600
                          sm:text-sm placeholder-gray-400" placeholder="Your email address">
                        <option disabled selected value>Chọn công việc</option>
                        <option>Thực tập</option>
                        <option>Chưa đi làm</option>
                        <option>Đã đi làm</option>
                        <option>Đã đi làm đúng chuyên ngành</option>
                        <option>Other</option>
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
                      <select id="dropdown" type="text" name="name" className="form-select block w-full h-10 px-4 mb-2 border
                          border-gray-300 rounded-md appearance-none text-gray-600
                          sm:text-sm placeholder-gray-400" placeholder="Your email address">
                        <option disabled selected value>Chọn khoảng lương</option>
                        <option>Dưới 5 triệu</option>
                        <option>Từ 5 đến 15 triệu</option>
                        <option>Từ 15 đến 30 triệu</option>
                        <option>Từ 30 đến 50 triệu</option>
                        <option>Trên 50 triệu</option>
                      </select>
                    </div>
                  </div>

                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Tên công ty hiện tại
                  </label>
                  <div className="mt-1 flex rounded-md">
                    <input id="email" type="email" name="name" className="form-input block w-full h-10 px-4 mb-2 border
                        border-gray-300 rounded-md
                        sm:text-sm placeholder-gray-400" placeholder="Nhập tên công ty" required></input>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-6 mt-2">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-700">Mức độ hài lòng của bạn về công việc
                    </legend>
                    <div className="mt-4 space-y-4">

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="user_answer" type="radio" value="definitely"
                                 className="form-radio h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Hài lòng</label>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="user_answer" type="radio" value="maybe"
                                 className="form-radio h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Tạm ổn</label>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="user_answer" type="radio" value="not_sure"
                                 className="form-radio h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Không hài lòng</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="col-span-6 sm:col-span-6 mt-2">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-700">Xin cho biết ngoại ngữ bạn xử dụng trong công việc.
                    </legend>
                    <p className="text-sm text-gray-500">Có thể chọn nhiều đáp án</p>
                    <div className="mt-4 space-y-4">

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" value="FE"
                                 className="h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Tiếng anh </label>
                          {/* <p className="text-gray-500">Things like HTML, CSS, JS or React</p> */}
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" value="BE"
                                 className="h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Tiếng nhật</label>
                          {/* <p className="text-gray-500">APIs and Microservices with NodeJS, Express</p> */}
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" value="FS"
                                 className="h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Tiếng trung</label>
                          {/* <p className="text-gray-500">The complete Stack for an End-to-End understanding</p> */}
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" value="FS"
                                 className="h-4 w-4 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">Ngôn ngữ khác</label>
                          {/* <p className="text-gray-500">The complete Stack for an End-to-End understanding</p> */}
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="col-span-6 sm:col-span-6 mt-2">
                  <label id="textarea" htmlFor="textfield" className="block text-sm font-medium text-gray-600">
                    Bạn có phản hồi nào khác không?
                  </label>
                  <div className="mt-1 flex rounded-md">
                  <textarea id="textfield" rows="3"
                            className="form-textarea w-full h-20 px-2 py-2 mb-2 appearance-none border border-gray-300 rounded-md sm:text-sm placeholder-gray-400">
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
  )
}