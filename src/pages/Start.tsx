import CoverImage from "../assets/start-cover.png";
import Logo from "../assets/logo.png";

const Start = () => {
  return (
    <>
      <header className="w-[956px] mx-auto py-12 px-8">
        <img src={Logo} className="w-[100px]" />
      </header>
      <main className="mb-12">
        <div className="bg-white max-w-2xl p-8 rounded-3xl mx-auto shadow-md">
          <img src={CoverImage} className="w-[384px] mx-auto" />
          <p className="text-center text-2xl font-medium text-textDark">
            World Medical Card®
          </p>
          <p className="text-center max-w-[330px] mx-auto mt-1 mb-16 text-textGrey font-medium">
            YOUR PERSONAL MEDICAL RECORD ALWAYS AVAILABLE
          </p>
          <div className="flex justify-center">
            <button className="bg-solidBlue rounded-full text-white px-4 py-3 w-full max-w-[370px] shadow-md hover:shadow-lg">
              <a href="">LOG IN</a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Start;
