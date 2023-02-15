import { object, string } from "yup";
import { useFormik } from "formik";
import { Apple, Google } from "react-bootstrap-icons";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import classnames from "classnames";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/logo.png";
import ErrorMessage from "../components/form/ErrorMessage";
import UserRequests from "../http/user";
import { initFirebase } from "../http/repository";

initFirebase();
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(8),
});

const Login = () => {
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (value: any) => {
      // API call here
      try {
        const resp = await UserRequests.login(value);
        if (!resp) {
          setLoginError("Password and email dont match.");
        } else {
          
          // console.log(body)
          localStorage.setItem("token", resp.token);
          localStorage.setItem("userId", resp.localId);
          navigate("/home");
        }
      } catch (error) {
        setLoginError("Unable to login.");
        console.log(error)
      }
    },
  });

  const logingWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential?.accessToken!;
      const user = result.user as any;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(user.reloadUserInfo.localId);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.reloadUserInfo.localId);
      navigate("/home");
    } catch (error: any) {
      console.log(error);
    }
  };

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
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-5 text-sm my-6">
                <div>
                  <input
                    className={classnames(
                      "w-full border rounded-md px-4 py-4 ",
                      {
                        "border-gray-500": !formik.errors.email,
                        "border-red-500": !!formik.errors.email,
                      }
                    )}
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <ErrorMessage msg={formik.errors.email} />
                </div>
                <div>
                  <input
                    className={classnames(
                      "w-full border rounded-md px-4 py-4 ",
                      {
                        "border-gray-500": !formik.errors.password,
                        "border-red-500": !!formik.errors.password,
                      }
                    )}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <ErrorMessage msg={formik.errors.password || loginError} />
                </div>
                <button
                  className="bg-solidBlue text-white rounded-xl px-4 shadow-md hover:shadow-lg py-4 w-full"
                  type="submit"
                >
                  Continue
                </button>
                <Link
                  to="/reset-password"
                  className="underline w-full text-center text-normal"
                >
                  Forgot password?
                </Link>
              </div>
            </form>

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
              <button
                className="w-full border border-solidBlue rounded-lg py-3 text-solidBlue flex justify-center gap-4 items-center hover:bg-solidBlue hover:bg-opacity-5"
                onClick={logingWithGoogle}
              >
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
