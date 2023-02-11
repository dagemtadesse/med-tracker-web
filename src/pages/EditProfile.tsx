import Input from "../components/form/Input";
import Select from "../components/form/Select";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { useFormik } from "formik";

const userSchema = object({
  firstName: string().label("First name").required().min(2),
  lastName: string().label("Last name").required().min(2),
  phone: string().label("Phone number").required(),
  dateOfBirth: string().label("Date of birth").required(),
  gender: string().label("Gender").required(),
  CPRNumber: string().label("CPR number").required(),
  organDonor: string().label("Organ donor").required(),
  nationality: string().label("Nationality").required(),
  insuranceType: string().label("Insurance type").required(),
  insuranceCompany: string().label("Insurance company").required(),
  policyNumber: string().label("Policy number"),
  emergencyPhone: string().label("Emergency"),
  zip: string().label("Zip/city").required(),
  city: string().label("City").required(),
  country: string().label("Country").required(),
  streetAdress: string().label("Street Adress").required(),
  contactPerson1Name: string().label("Name").required(),
  constactPerson1Phone: string().label("Phone").required(),
  contactPerson1Relationship: string().label("Relationship").required(),
  contactPerson2Name: string().label("Name"),
  constactPerson2Phone: string().label("Phone"),
  contactPerson2Relationship: string().label("Relationship"),
});

const EditProfile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      CPRNumber: "",
      nationality: "",
      organDonor: "",
      insuranceType: "",
      insuranceCompany: "",
      policyNumber: "",
      emergencyPhone: "",
      zip: "",
      city: "",
      country: "",
      streetAdress: "",
      contactPerson1Name: "",
      constactPerson1Phone: "",
      contactPerson1Relationship: "",
      contactPerson2Name: "",
      contactPerson2Phone: "",
      contactPerson2Relationship: "",
      other: "",
    },
    onSubmit: () => {},
    validationSchema: userSchema,
  });

  return (
    <div className=" py-8 px-12 w-full">
      <div className="bg-white rounded-3xl w-full min-h-full shadow-sm text-textDark p-6 overflow-auto">
        <div>
          <h1 className="text-2xl font-medium ">Edit: My Profile</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex min-h-full gap-16 mt-4">
            <div className="basis-[33.333%]">
              <div>
                <h2 className="text-xl font-medium">Personal Info</h2>
                <p className="text-sm text-lightGrey mt-2">
                  Please fill your personal information to create an account you
                  can change them later
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <Input
                  label="First Name"
                  lg={false}
                  onChange={formik.handleChange}
                  name="firstName"
                  error={formik.errors.firstName}
                />
                <Input
                  label="Last Name"
                  lg={false}
                  name="lastName"
                  onChange={formik.handleChange}
                  error={formik.errors.lastName}
                />
                <Input
                  label="Phone number"
                  lg={false}
                  name="phone"
                  onChange={formik.handleChange}
                  error={formik.errors.phone}
                />
                <div className="flex gap-2">
                  <div className="basis-[60%]">
                    <Input
                      label="Date of Birth"
                      lg={false}
                      name="dateOfBirth"
                      onChange={formik.handleChange}
                      error={formik.errors.dateOfBirth}
                      type="date"
                    />
                  </div>
                  <div className="basis-[40%]">
                    <Select
                      placeholder="Gender"
                      options={["male", "female"]}
                      onChange={(value) =>
                        formik.setFieldValue("gender", value)
                      }
                      error={formik.errors.gender}
                    />
                  </div>
                </div>
                <Input
                  label="CPR number"
                  lg={false}
                  name="CPRNumber"
                  onChange={formik.handleChange}
                  error={formik.errors.CPRNumber}
                />
                <Select
                  options={[]}
                  placeholder="select nationality"
                  onChange={(value) =>
                    formik.setFieldValue("nationality", value)
                  }
                  error={formik.errors.nationality}
                />
                <div>
                  <p className="text-base mb-1">
                    Would you like to be an organ donor?
                  </p>
                  <Select
                    options={["Yes", "No"]}
                    placeholder="Answer"
                    onChange={(value) =>
                      formik.setFieldValue("organDonor", value)
                    }
                    error={formik.errors.organDonor}
                  />
                  <p className="text-sm text-lightGrey mt-2">
                    Healthcare professionals will be required to ask family to
                    confirm your decision
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[33.333%]">
              <div>
                <h2 className="text-xl font-medium">Postal address</h2>
                <p className="text-sm text-lightGrey mt-2">
                  Fill the address you want us to send the card to. The address
                  will not appear on the emergency card.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-2">
                  <Input
                    label="Zip/city"
                    lg={false}
                    name="postalFirstName"
                    onChange={formik.handleChange}
                    error={formik.errors.zip}
                  />
                  <Input
                    label="City"
                    lg={false}
                    name="postalLastName"
                    onChange={formik.handleChange}
                    error={formik.errors.city}
                  />
                </div>
                <Input
                  label="Country"
                  lg={false}
                  name="country"
                  onChange={formik.handleChange}
                  error={formik.errors.country}
                />
                <Input
                  label="Street Adress"
                  lg={false}
                  name="streetAdress"
                  onChange={formik.handleChange}
                  error={formik.errors.streetAdress}
                />
              </div>

              <div>
                <h2 className="text-xl font-medium mt-8 mb-3">Insurance</h2>
                <p className="text-sm text-lightGrey mt-2">
                  Add insurance information for reference.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <Input
                  label="Insurance Type"
                  lg={false}
                  name="insuranceType"
                  onChange={formik.handleChange}
                  error={formik.errors.insuranceType}
                />
                <Input
                  label="Insurance company"
                  lg={false}
                  name="insuranceCompany"
                  onChange={formik.handleChange}
                  error={formik.errors.insuranceCompany}
                />
                <Input
                  label="Policy number (optional)"
                  lg={false}
                  name="policyNumber"
                  onChange={formik.handleChange}
                  error={formik.errors.policyNumber}
                />
                <Input
                  label="Emergency telephone (optional)"
                  lg={false}
                  name="emergencyPhone"
                  onChange={formik.handleChange}
                  error={formik.errors.emergencyPhone}
                />
              </div>
            </div>
            <div className="basis-[33.333%]">
              <div>
                <h2 className="text-xl font-medium">
                  Contact persons in case of emergency
                </h2>
                <p className="text-sm text-lightGrey mt-2">
                  Add contacts that you trust in case of an emergency.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <Input
                  label="Name"
                  lg={false}
                  name="contactPerson1Name"
                  onChange={formik.handleChange}
                  error={formik.errors.contactPerson1Name}
                />
                <div className="flex gap-2">
                  <Input
                    label="Phone number"
                    lg={false}
                    name="constactPerson1Phone"
                    onChange={formik.handleChange}
                    error={formik.errors.constactPerson1Phone}
                  />
                  <Input
                    label="Relationship"
                    lg={false}
                    name="constactPerson1Phone"
                    onChange={formik.handleChange}
                    error={formik.errors.contactPerson1Relationship}
                  />
                </div>
                <div className="mt-1"></div>
                <Input
                  label="Name"
                  lg={false}
                  name="contactPerson1Name"
                  onChange={formik.handleChange}
                  error={formik.errors.contactPerson2Name}
                />
                <div className="flex gap-2">
                  <Input
                    label="Phone number"
                    lg={false}
                    name="contactPerson1Phone"
                    onChange={formik.handleChange}
                    error={formik.errors.contactPerson2Phone}
                  />
                  <Input
                    label="Relationship"
                    lg={false}
                    name="contactPerson1Relationship"
                    onChange={formik.handleChange}
                    error={formik.errors.contactPerson2Relationship}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium mt-8 mb-3">Other</h2>
              </div>

              <Input
                label="Other"
                lg={true}
                name="other"
                onChange={formik.handleChange}
                error={undefined}
              />
            </div>
          </div>
          <div className="flex justify-end gap-10 text-sm pt-8">
            <Link to="/home">
              <button
                className="rounded-full text-center border border-solidBlue hover:bg-solidBlue hover:bg-opacity-10 px-10 py-2 text-solidBlue w-[200px]"
                type="submit"
              >
                Cancel
              </button>
            </Link>
            <button
              className="rounded-full text-center shadow-md hover:shadow-lg px-10 py-1 text-white bg-solidBlue w-[200px]"
              type="reset"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
