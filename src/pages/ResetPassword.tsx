import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const ResetPassword = () => {
  return (
    <>
      <header className="w-[956px] mx-auto py-12 px-8 text-textDark">
        <img src={Logo} className="w-[100px]" />
      </header>
      <main className="text-textDark">
        <div className="bg-white p-6 rounded-3xl mx-auto max-w-[624px] shadow-sm flex flex-col mb-8">
          <Link className="flex justify-start items-center gap-4" to="/">
            <ArrowLeft size="24" /> <span>Back</span>
          </Link>

          <div className="my-10">
            <h1 className="text-5xl font-bold capitalize">Reset password</h1>
            <p className="text-2xl mt-5">
            Please type your email address and press the button to reset your password.
            </p>
            <form className="flex flex-col gap-5 text-sm my-6">
              <input
                className="w-full border border-gray-500 rounded-md px-4 py-4"
                type="email"
                placeholder="Email"
              />

              <button
                className="bg-solidBlue text-white rounded-xl px-4 shadow-md hover:shadow-lg py-4 w-full"
                type="submit"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
