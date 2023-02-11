import { ChangeEvent, useContext, useState } from "react";
import { FileEarmarkText } from "react-bootstrap-icons";
import { object, string } from "yup";
import { useFormik } from "formik";

import DocumentContext from "../../contexts/DocumentContext";
import FileInput from "../form/FileInput";
import Input from "../form/Input";
import Select from "../form/Select";
import SidePopup from "./SidePopup";

const options = [
  "Certificate",
  "Discharge Summary",
  "Insurance",
  "Living will",
  "Passport",
  "Prescription",
  "Travel Document",
  "X-ray",
  "Other",
];

const documentSchema = object({
  title: string().email().required(),
  type: string().required(),
  description: string(),
});

const NewDocumentPopup = () => {
  const documentCtx = useContext(DocumentContext);
  const currentDocument = documentCtx.currentDocument!;

  const close = () => documentCtx.setCurrentDocument(undefined);

  const [file, setFile] = useState<File | null>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const formik = useFormik({
    initialValues: { title: "", description: "", type: "" },
    onSubmit: () => {},
    validationSchema: documentSchema,
  });

  return (
    <SidePopup title="Add New document" handleClose={close}>
      {!currentDocument?.fileURL && !file && (
        <FileInput handleChange={handleChange} />
      )}

      {(file || currentDocument?.fileURL) && (
        <form>
          <div className="my-4 flex gap-6 flex-col relative bottom-0 h-full pb-6">
            <div className="border border-gray-600 rounded-md w-full py-3 px-3 flex gap-2 items-center text-lightGrey">
              <FileEarmarkText size={18} /> portrait.png
            </div>
            <Input
              label="Document Title"
              lg={false}
              name={"title"}
              onChange={formik.handleChange}
              blurHandler={formik.handleBlur}
              error={formik.touched.title ? formik.errors.title : undefined}
            />

            <Select
              options={options}
              placeholder="Document Type"
              onBlur={() => formik.setFieldTouched("type")}
              onChange={(value) => formik.setFieldValue("type", value)}
              error={formik.touched.type ? formik.errors.type : undefined}
            />

            <Input
              label="Document description (optional)"
              name={"title"}
              onChange={formik.handleChange}
              blurHandler={formik.handleBlur}
              error={
                formik.touched.description
                  ? formik.errors.description
                  : undefined
              }
              lg
            />

            <button className="uppercase bg-solidBlue text-white w-full py-3 shadow-md hover:shadow-lg rounded-full self-end mt-auto text-sm">
              Upload new document
            </button>
          </div>
        </form>
      )}
    </SidePopup>
  );
};

export default NewDocumentPopup;
