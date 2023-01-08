import { PenFill } from "react-bootstrap-icons";
import SidePopup from "../popup/SidePopup";

const ViewProfile = ({ close }: { close: () => void }) => {
  return (
    <SidePopup title="My Profile" handleClose={close}>
      <div>
        <div className="flex justify-between mt-4">
          <div>
            <div className="text-xl font-medium">Dagem Tadesse</div>
            <p className="text-sm text-lightGrey mt-0.5">Member since 2002</p>
          </div>
          <div>
            <button className="border border-solidBlue rounded-full flex gap-4 px-4 py-2 items-center text-solidBlue hover:bg-solidBlue hover:bg-opacity-10">
              <PenFill /> Edit
            </button>
          </div>
        </div>
        {/* divider */}
        <div className="border-b border-gray-200 my-4"></div>

        <div className="flex justify-between">
          <div>
            <p className="font-medium">Birth Date</p>
            <p className="text-sm text-lightGrey capitalize mt-1">
              04 Nov 2059
            </p>
          </div>
          <div>
            <p className="font-medium">Gender</p>
            <p className="text-sm text-lightGrey capitalize mt-1">male</p>
          </div>
          <div>
            <p className="font-medium">Organ donor</p>
            <p className="text-sm text-lightGrey capitalize mt-1">Yes</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-medium">Social Security Number</p>
          <p className="text-sm text-lightGrey capitalize mt-1">1111</p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Nationality</p>
          <p className="text-sm text-lightGrey capitalize mt-1">Norwegian</p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Telephone</p>
          <p className="text-sm text-lightGrey capitalize mt-1">93211432</p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Postal Address</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            Alvøveien 130
          </p>
          <p className="text-sm text-lightGrey capitalize mt-1">Godvik</p>
          <p className="text-sm text-lightGrey capitalize mt-1">5079</p>
          <p className="text-sm text-lightGrey capitalize mt-1">NO</p>
        </div>

        <div className="border-b border-gray-200 my-4"></div>

        <div className="flex">
          <div className="basis-[50%]">
            <div className=" font-medium">Travel Insurance</div>
            <p className="text-sm text-lightGrey capitalize mt-1">Travel</p>
          </div>
          <div className="basis-[50%]">
            <div className="font-medium">Policy Number</div>
            <p className="text-sm text-lightGrey capitalize mt-1">string</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="basis-[50%]">
            <div className="font-medium">Emergency phone</div>
            <p className="text-sm text-lightGrey capitalize mt-1">string</p>
          </div>
        </div>

        <div className="border-b border-gray-200 my-4"></div>

        <div className="mt-4">
          <p className="font-medium">Contact person incase of emergency</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            Alvøveien 130
          </p>
          <p className="text-sm text-lightGrey capitalize mt-1">Godvik</p>
          <p className="text-sm text-lightGrey capitalize mt-1">5079</p>
        </div>

        <div className="border-b border-gray-200 my-4"></div>

        <div className="mt-4">
          <p className="font-medium">Other information</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            Alvøveien 130
          </p>
          <p className="text-sm text-lightGrey capitalize mt-1">Godvik</p>
        </div>
      </div>
    </SidePopup>
  );
};

export default ViewProfile;
