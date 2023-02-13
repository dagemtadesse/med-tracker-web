import { ChangeEvent, useContext, useState } from "react";
import { FileEarmarkText } from "react-bootstrap-icons";
import { object, string } from "yup";
import { useFormik } from "formik";

import DocumentContext from "../../contexts/DocumentContext";
import FileInput from "../form/FileInput";
import Input from "../form/Input";
import Select from "../form/Select";
import SidePopup from "./SidePopup";
import { uploadImage } from "../../http/repository";

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
  title: string().required(),
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
    initialValues: {
      title: currentDocument.title || "",
      description: currentDocument.description || "",
      type: currentDocument.type || "",
    },
    onSubmit: async (data) => {
      let url: string;
      if (currentDocument.fileURL) {
        url = currentDocument.fileURL!;
      } else {
        url = await uploadImage(localStorage.getItem("userId")!, file!);
      }

      const newDoc = {
        id: url,
        fileURL: url,
        type: data.type,
        description: data.description,
        title: data.title,
      }

      if(currentDocument.fileURL){
        documentCtx.editDocument(newDoc)
        return
      }

      documentCtx.addAnewDocument(newDoc);
    },
    validationSchema: documentSchema,
  });

  return (
    <SidePopup title="Add New document" handleClose={close}>
      {!currentDocument?.fileURL && !file && (
        <FileInput handleChange={handleChange} />
      )}

      {(file || currentDocument?.fileURL) && (
        <form onSubmit={formik.handleSubmit}>
          <div className="my-4 flex gap-6 flex-col relative bottom-0 h-full pb-6">
            <div className="border border-gray-600 rounded-md w-full py-3 px-3 flex gap-2 items-center text-lightGrey">
              <FileEarmarkText size={18} /> portrait.png
            </div>
            <Input
              label="Document Title"
              lg={false}
              name={"title"}
              onChange={formik.handleChange}
              value={formik.values.title}
              blurHandler={formik.handleBlur}
              error={formik.touched.title ? formik.errors.title : undefined}
            />

            <Select
              options={options}
              placeholder="Document Type"
              onBlur={() => formik.setFieldTouched("type")}
              onChange={(value) => formik.setFieldValue("type", value)}
              value={formik.values.type}
              error={formik.touched.type ? formik.errors.type : undefined}
            />

            {formik.values.type || "no type"}

            <Input
              label="Document description (optional)"
              name={"description"}
              onChange={formik.handleChange}
              blurHandler={formik.handleBlur}
              value={formik.values.description}
              error={
                formik.touched.description
                  ? formik.errors.description
                  : undefined
              }
              lg
            />

            <button
              className="uppercase bg-solidBlue text-white w-full py-3 shadow-md hover:shadow-lg rounded-full self-end mt-auto text-sm"
              type="submit"
            >
              Upload new document
            </button>
          </div>
        </form>
      )}
    </SidePopup>
  );
};

export default NewDocumentPopup;
