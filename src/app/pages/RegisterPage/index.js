import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useRegister } from '../../../mutations/alumni';

export default function RegisterPage() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const mutation = useRegister();

  const handleRegister = useCallback(async () => {
    try {
      await mutation.mutateAsync({ email, id });
      setMessage('Chúng tôi đã gửi liên kết xác thực vào tài khoản của bạn. Vui lòng kiểm tra email và làm theo hướng dẫn.')
    } catch (err) {
      setMessage(err.response.data.message)
    }
  }, [email, id]);

  return (
    <div
      className="flex flex-col items-center justify-center"
    >
      <Helmet>
        <title>Đăng ký tài khoản</title>
      </Helmet>
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Đăng ký tài khoản
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800 text-center">
          {message ? <h1 className={'text-red-600 text-center'}>{message}</h1> :
            'Vui lòng nhập thông tin của bạn, chúng tôi sẽ kiểm tra và tạo tài khoản cho bạn'}
        </div>

        <div className="mt-10">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >Email</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                    md:w-96
                  "
                  placeholder="Nhập vào email sinh viên nhà trường cấp"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Mã sinh viên</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  name="ma_sv"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Nhập vào mã sinh viên của bạn"
                  onChange={e => setId(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                onClick={handleRegister}
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Tiếp tục</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a
          href="#1"
          target="_blank"
          className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span className="ml-2"
          >Bạn đã có tài khoản?
            <Link
              to={'/login'}
              className="text-xs ml-2 text-blue-500 font-semibold"
            >Đăng nhập ngay</Link
            ></span
          >
        </a>
      </div>
    </div>
  )
};