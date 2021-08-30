import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useContext, useState } from "react";
import { AuthContext } from './../context/state';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const route = useRouter();

  const __handleLogin = (e) => {
    e.preventDefault();
    
    route.push('/');
  };

  const __handleOnChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "email") return setEmail(value);

    if (name === "password") return setPassword(value);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={__handleLogin}>
              <div>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    className="appearance-none block w-full px-3 py-2 border bg-gray-200 focus:bg-white border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={__handleOnChange}
                  />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border bg-gray-200 focus:bg-white border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={__handleOnChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="w-full flex">
                <div className="mx-28">
                  <button
                    type="submit"
                    className="flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-semibold text-white bg-blue-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
