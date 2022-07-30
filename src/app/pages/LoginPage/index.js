import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import useQuery from 'app/hooks/useQuery';
import { useLogin } from 'mutations/alumni';
import { useCallback, useEffect, useState } from 'react';

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useLogin();
  const query = useQuery();

  const handleLogin = useCallback(async () => {
    try {
      await mutation.mutateAsync({ email, password })
      history.push('/admin');
    } catch (err) {
      setMessage(err.response.data.message)
    }
  }, [email, password]);

  useEffect(() => {
    setMessage(query.get('message'));
  }, [])

  return (
    <div
      className="flex flex-col items-center justify-center"
    >
      <Helmet>
        <title>Đăng nhập</title>
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
          Đăng nhập
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          {message ? <h1 className={'text-red-600 text-xl text-center'}>{message}</h1> : 'Nhập thông tin tài khoản để tiếp tục'}
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
                  placeholder="Enter your email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Mật khẩu</label
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
                  type="password"
                  name="password"
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
                  placeholder="Enter your password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                onClick={handleLogin}
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
                <span className="mr-2 uppercase">Đăng nhập</span>
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
          >Bạn chưa có tài khoản?
            <Link
              to={'/register'}
              className="text-xs ml-2 text-blue-500 font-semibold"
            >Tạo ngay</Link
            ></span
          >
        </a>
      </div>
    </div>
  )
};