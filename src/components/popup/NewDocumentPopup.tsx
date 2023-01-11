import { ChangeEvent, useContext, useState } from "react";
import { FileEarmark, FileEarmarkText } from "react-bootstrap-icons";
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

const NewDocumentPopup = () => {
  const documentCtx = useContext(DocumentContext);
  const currentDocument = documentCtx.currentDocument!;

  const close = () => documentCtx.setCurrentDocument(undefined);

  const [file, setFile] = useState<File | null>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  return (
    <SidePopup title="Add New document" handleClose={close}>
      {(!currentDocument?.fileURL && !file) && (
        <FileInput handleChange={handleChange} />
      )}

      {(file || currentDocument?.fileURL) && (
        <div className="my-4 flex gap-6 flex-col relative bottom-0 h-full pb-6">
          <div className="border border-gray-600 rounded-md w-full py-3 px-3 flex gap-2 items-center text-lightGrey">
            <FileEarmarkText size={18} /> portrait.png
          </div>
          <Input label="Document Title" lg={false} />

          <Select options={options} placeholder="Document Type" onChange={() => {}}/>

          <Input label="Document description (optional)" lg />

          <button className="uppercase bg-solidBlue text-white w-full py-3 shadow-md hover:shadow-lg rounded-full self-end mt-auto text-sm">
            Upload new document
          </button>
        </div>
      )}
    </SidePopup>
  );
};

export default NewDocumentPopup;
