import { Fragment } from "react";
import { PenFill } from "react-bootstrap-icons";
import { User } from "../../contexts/UserContext";
import SidePopup from "../popup/SidePopup";

const ViewProfile = ({ close, user }: { close: () => void; user: User }) => {
  return (
    <SidePopup title="My Profile" handleClose={close}>
      <div>
        <div className="flex justify-between mt-4">
          <div>
            <div className="text-xl font-medium">
              {user.firstName} {user.lastName}
            </div>
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
            <p className="text-sm text-lightGrey capitalize mt-1">
              {user.gender}
            </p>
          </div>
          <div>
            <p className="font-medium">Organ donor</p>
            <p className="text-sm text-lightGrey capitalize mt-1">
              {user.isOrganDonor ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-medium">Social Security Number</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.CPRNumber}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Nationality</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.nationality}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Telephone</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.phoneNumber}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Postal Address</p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.address.streetAddress}
          </p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.address.city}
          </p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.address.zip}
          </p>
          <p className="text-sm text-lightGrey capitalize mt-1">
            {user.address.country}
          </p>
        </div>

        <div className="border-b border-gray-200 my-4"></div>

        <div className="flex">
          <div className="basis-[50%]">
            <div className=" font-medium">Insurance type</div>
            <p className="text-sm text-lightGrey capitalize mt-1">
              {user.insurance.type}
            </p>
          </div>
          <div className="basis-[50%]">
            <div className="font-medium">Policy Number</div>
            <p className="text-sm text-lightGrey capitalize mt-1">
              {user.insurance.polcyNumber}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="basis-[50%]">
            <div className="font-medium">Emergency phone</div>
            <p className="text-sm text-lightGrey capitalize mt-1">
              {user.insurance.emergencyNumber}
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 my-4"></div>

        <div className="mt-4">
          <p className="font-medium">Contact person incase of emergency</p>
          {user.emergencyContactPerson.map((person, index) => (
            <div className="mb-3" key={index}>
              <p className="text-sm text-lightGrey capitalize mt-1">
                {person.name}
              </p>
              <p className="text-sm text-lightGrey capitalize mt-1">{person.phoneNumber}</p>
              <p className="text-sm text-lightGrey capitalize mt-1">{person.relationship}</p>
            </div>
          ))}
        </div>

        <div className="border-b border-gray-200 my-4"></div>

        <div className="mt-4">
          <p className="font-medium">Other information</p>
          <p className="text-sm text-lightGrey capitalize mt-1">{user.other}</p>
        </div>
      </div>
    </SidePopup>
  );
};

export default ViewProfile;
