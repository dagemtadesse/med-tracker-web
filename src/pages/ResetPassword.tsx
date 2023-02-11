import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import classnames from "classnames";
import Logo from "../assets/logo.png";
import ErrorMessage from "../components/form/ErrorMessage";

const emailSchema = object({
  email: string().email().required(),
});

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: emailSchema,
    onSubmit: () => {
      // API call here
      console.log("value");
    },
  });

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
            <p className="text-2xl font-light mt-5">
              Please type your email address and press the button to reset your
              password.
            </p>
            <form
              className="flex flex-col gap-5 text-sm my-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <input
                  className={classnames("w-full border rounded-md px-4 py-4 ", {
                    "border-gray-500": !formik.errors.email,
                    "border-red-500": !!formik.errors.email,
                  })}
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                />
                <ErrorMessage msg={formik.errors.email} />
              </div>

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
