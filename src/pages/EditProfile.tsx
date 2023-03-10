import Input from "../components/form/Input";
import Select from "../components/form/Select";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useFormik } from "formik";
import nationality from "../nationality";
import { updateUserInfo } from "../http/repository";
import UserContext, { User } from "../contexts/UserContext";
import { useContext } from "react";

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
  const userCtx = useContext(UserContext);

  const nvaigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: userCtx.user?.firstName || "",
      lastName: userCtx.user?.lastName || "",
      phone: userCtx.user?.phoneNumber || "",
      dateOfBirth: userCtx.user?.dateOfBirth || "",
      gender: userCtx.user?.gender || "",
      CPRNumber: userCtx.user?.CPRNumber || "",
      nationality: userCtx.user?.nationality || "",
      organDonor: userCtx.user?.isOrganDonor ? "yes" : "no",
      insuranceType: userCtx.user?.insurance.polcyNumber || "",
      insuranceCompany: userCtx.user?.insurance.company || "",
      policyNumber: userCtx.user?.insurance.polcyNumber || "",
      emergencyPhone: userCtx.user?.insurance.emergencyNumber || "",
      zip: userCtx.user?.address.zip || "",
      city: userCtx.user?.address.city || "",
      country: userCtx.user?.address.country || "",
      streetAdress: userCtx.user?.address.streetAddress || "",
      contactPerson1Name: userCtx.user?.emergencyContactPerson[0]?.name || "",
      constactPerson1Phone:
        userCtx.user?.emergencyContactPerson[0]?.phoneNumber || "",
      contactPerson1Relationship:
        userCtx.user?.emergencyContactPerson[0]?.relationship || "",
      contactPerson2Name: userCtx.user?.emergencyContactPerson[1]?.name || "",
      contactPerson2Phone:
        userCtx.user?.emergencyContactPerson[1]?.phoneNumber || "",
      contactPerson2Relationship:
        userCtx.user?.emergencyContactPerson[1]?.relationship || "",
      other: userCtx.user?.other || "",
    },

    onSubmit: async (data) => {
      const userId = localStorage.getItem("userId") ?? "";
      const user: User = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phone,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        CPRNumber: data.CPRNumber,
        nationality: data.nationality,
        isOrganDonor: data.organDonor == "yes",
        createdAt: new Date(),
        address: {
          zip: data.zip,
          city: data.city,
          streetAddress: data.streetAdress,
          country: data.country,
        },
        insurance: {
          type: data.insuranceType,
          company: data.insuranceCompany,
          polcyNumber: data.policyNumber,
          emergencyNumber: data.emergencyPhone,
        },
        emergencyContactPerson: [
          {
            name: data.contactPerson1Name,
            phoneNumber: data.constactPerson1Phone,
            relationship: data.contactPerson1Relationship,
          },
          {
            name: data.contactPerson2Name,
            phoneNumber: data.contactPerson2Phone,
            relationship: data.contactPerson2Relationship,
          },
        ],
        other: data.other,
      };

      console.log(user);

      try {
        await updateUserInfo(userId, user);
        userCtx.setUser(user);
        nvaigate("/home")
      } catch (error) {
        console.log(error);
      }
    },

    validationSchema: userSchema,
  });

  return (
    <div className=" py-8 px-12 w-full">
      <div className="bg-white rounded-3xl w-full min-h-full shadow-sm text-textDark p-6 overflow-auto">
        <div>
          <h1 className="text-2xl font-medium" data-testid="profile-header">Edit: My Profile</h1>
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
                  blurHandler={formik.handleBlur}
                  name="firstName"
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName
                      ? formik.errors.firstName
                      : undefined
                  }
                />
                <Input
                  label="Last Name"
                  lg={false}
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  blurHandler={formik.handleBlur}
                  error={
                    formik.touched.lastName ? formik.errors.lastName : undefined
                  }
                />
                <Input
                  label="Phone number"
                  lg={false}
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  blurHandler={formik.handleBlur}
                  error={formik.touched.phone ? formik.errors.phone : undefined}
                />
                <div className="flex gap-2">
                  <div className="basis-[60%]">
                    <Input
                      label="Date of Birth"
                      lg={false}
                      name="dateOfBirth"
                      onChange={formik.handleChange}
                      blurHandler={formik.handleBlur}
                      value={formik.values.dateOfBirth}
                      error={
                        formik.touched.dateOfBirth
                          ? formik.errors.dateOfBirth
                          : undefined
                      }
                      type="date"
                    />
                  </div>
                  <div className="basis-[40%]">
                    <Select
                      placeholder="Gender"
                      options={["male", "female"]}
                      value={formik.values.gender}
                      onBlur={() => formik.setFieldTouched("gender")}
                      onChange={(value) =>
                        formik.setFieldValue("gender", value)
                      }
                      error={
                        formik.touched.gender ? formik.errors.gender : undefined
                      }
                    />
                  </div>
                </div>
                <Input
                  label="CPR number"
                  lg={false}
                  name="CPRNumber"
                  onChange={formik.handleChange}
                  blurHandler={formik.handleBlur}
                  value={formik.values.CPRNumber}
                  error={
                    formik.touched.CPRNumber
                      ? formik.errors.CPRNumber
                      : undefined
                  }
                />
                <Select
                  options={nationality.map((n) => n.nationality)}
                  placeholder="select nationality"
                  value={formik.values.nationality}
                  onBlur={() => formik.setFieldTouched("nationality")}
                  onChange={(value) =>
                    formik.setFieldValue("nationality", value)
                  }
                  error={
                    formik.touched.nationality
                      ? formik.errors.nationality
                      : undefined
                  }
                />
                <div>
                  <p className="text-base mb-1">
                    Would you like to be an organ donor?
                  </p>
                  <Select
                    options={["Yes", "No"]}
                    placeholder="Answer"
                    onBlur={() => formik.setFieldTouched("organDonor")}
                    value={formik.values.organDonor}
                    onChange={(value) =>
                      formik.setFieldValue("organDonor", value)
                    }
                    error={
                      formik.touched.organDonor
                        ? formik.errors.organDonor
                        : undefined
                    }
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
                    name="zip"
                    onChange={formik.handleChange}
                    value={formik.values.zip}
                    blurHandler={formik.handleBlur}
                    error={formik.touched.zip ? formik.errors.zip : undefined}
                  />
                  <Input
                    label="City"
                    lg={false}
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    error={formik.touched.city ? formik.errors.city : undefined}
                  />
                </div>
                <Input
                  label="Country"
                  lg={false}
                  name="country"
                  onChange={formik.handleChange}
                  blurHandler={formik.handleBlur}
                  value={formik.values.country}
                  error={
                    formik.touched.country ? formik.errors.country : undefined
                  }
                />
                <Input
                  label="Street Adress"
                  lg={false}
                  name="streetAdress"
                  onChange={formik.handleChange}
                  blurHandler={formik.handleBlur}
                  value={formik.values.streetAdress}
                  error={
                    formik.touched.streetAdress
                      ? formik.errors.streetAdress
                      : undefined
                  }
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
                  blurHandler={formik.handleBlur}
                  value={formik.values.insuranceType}
                  error={
                    formik.touched.insuranceType
                      ? formik.errors.insuranceType
                      : undefined
                  }
                />
                <Input
                  label="Insurance company"
                  lg={false}
                  name="insuranceCompany"
                  onChange={formik.handleChange}
                  blurHandler={formik.handleBlur}
                  value={formik.values.insuranceCompany}
                  error={
                    formik.touched.insuranceCompany
                      ? formik.errors.insuranceCompany
                      : undefined
                  }
                />
                <Input
                  label="Policy number (optional)"
                  lg={false}
                  name="policyNumber"
                  onChange={formik.handleChange}
                  value={formik.values.policyNumber}
                  error={
                    formik.touched.policyNumber
                      ? formik.errors.policyNumber
                      : undefined
                  }
                  blurHandler={formik.handleBlur}
                />
                <Input
                  label="Emergency telephone (optional)"
                  lg={false}
                  name="emergencyPhone"
                  onChange={formik.handleChange}
                  value={formik.values.emergencyPhone}
                  error={
                    formik.touched.emergencyPhone
                      ? formik.errors.emergencyPhone
                      : undefined
                  }
                  blurHandler={formik.handleBlur}
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
                  value={formik.values.contactPerson1Name}
                  error={
                    formik.touched.contactPerson1Name
                      ? formik.errors.contactPerson1Name
                      : undefined
                  }
                  blurHandler={formik.handleBlur}
                />
                <div className="flex gap-2">
                  <Input
                    label="Phone number"
                    lg={false}
                    name="constactPerson1Phone"
                    onChange={formik.handleChange}
                    blurHandler={formik.handleBlur}
                    value={formik.values.constactPerson1Phone}
                    error={
                      formik.touched.constactPerson1Phone
                        ? formik.errors.constactPerson1Phone
                        : undefined
                    }
                  />
                  <Input
                    label="Relationship"
                    lg={false}
                    name="contactPerson1Relationship"
                    value={formik.values.contactPerson1Relationship}
                    onChange={formik.handleChange}
                    blurHandler={formik.handleBlur}
                    error={
                      formik.touched.contactPerson1Relationship
                        ? formik.errors.contactPerson1Relationship
                        : undefined
                    }
                  />
                </div>
                <div className="mt-1"></div>
                <Input
                  label="Name"
                  lg={false}
                  name="contactPerson2Name"
                  onChange={formik.handleChange}
                  blurHandler={formik.handleBlur}
                  value={formik.values.contactPerson2Name}
                  error={
                    formik.touched.insuranceCompany
                      ? formik.errors.contactPerson2Name
                      : undefined
                  }
                />
                <div className="flex gap-2">
                  <Input
                    label="Phone number"
                    lg={false}
                    name="contactPerson2Phone"
                    onChange={formik.handleChange}
                    value={formik.values.contactPerson2Phone}
                    blurHandler={formik.handleBlur}
                    error={
                      formik.touched.contactPerson2Phone
                        ? formik.errors.contactPerson2Phone
                        : undefined
                    }
                  />
                  <Input
                    label="Relationship"
                    lg={false}
                    name="contactPerson2Relationship"
                    onChange={formik.handleChange}
                    blurHandler={formik.handleBlur}
                    value={formik.values.contactPerson2Relationship}
                    error={
                      formik.touched.contactPerson2Relationship
                        ? formik.errors.contactPerson2Relationship
                        : undefined
                    }
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
                value={formik.values.other}
                onChange={formik.handleChange}
                blurHandler={formik.handleBlur}
                error={undefined}
              />
            </div>
          </div>
          <div className="flex justify-end gap-10 text-sm pt-8">
            <Link to="/home">
              <button
                className="rounded-full text-center border border-solidBlue hover:bg-solidBlue hover:bg-opacity-10 px-10 py-2 text-solidBlue w-[200px]"
                type="reset"
              >
                Cancel
              </button>
            </Link>
            <button
              className="rounded-full text-center shadow-md hover:shadow-lg px-10 py-1 text-white bg-solidBlue w-[200px]"
              type="submit"
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
