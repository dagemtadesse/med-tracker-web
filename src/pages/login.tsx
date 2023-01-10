import { Apple, Google } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <>
      <header className="w-[956px] mx-auto py-12 px-8 text-textDark">
        <img src={Logo} className="w-[100px]" />
      </header>
      <main className="text-textDark">
        <div className="bg-white p-10 py-12 rounded-3xl mx-auto max-w-[624px] flex flex-col shadow-sm  mb-8 overflow-auto">
          <div>
            <h1 className="text-5xl font-bold capitalize">hello</h1>
            <p className="text-2xl mt-5">
              To start please log in using the options below.
            </p>
            <div className="flex flex-col gap-5 text-sm my-6">
              <input
                className="w-full border border-gray-500 rounded-md px-4 py-4"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full border border-gray-500 rounded-md px-4 py-4"
                type="password"
                placeholder="Password"
              />
              <button
                className="bg-solidBlue text-white rounded-xl px-4 shadow-md hover:shadow-lg py-4 w-full"
                type="submit"
              >
                Continue
              </button>
              <Link to="" className="underline w-full text-center text-normal">
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center gap-4 my-3">
              <div className="border-t h-[1px] border-gray-300 grow"></div>
              <div>OR</div>
              <div className="border-t h-[1px] border-gray-300 grow"></div>
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <button className="w-full border border-solidBlue rounded-lg py-3 text-solidBlue flex justify-center gap-4 items-center hover:bg-solidBlue hover:bg-opacity-5">
                <Apple size="24" />
                <span> Sign in with Apple</span>
              </button>
              <button className="w-full border border-solidBlue rounded-lg py-3 text-solidBlue flex justify-center gap-4 items-center hover:bg-solidBlue hover:bg-opacity-5">
                <Google size="24" /> <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
