import {
  CloudDownloadFill,
  EyeFill,
  FileEarmarkPostFill,
  Pencil,
  Trash,
} from "react-bootstrap-icons";
import IconButton from "../widgets/IconButton";

type DocumentItemProps = {
  title: string;
  description: string;
  fileURL: string;
  deleteHandler: () => void;
  viewHandler: () => void;
  downloadHandler: () => void;
  editHandler: () => void;
};

const DocumentItem = ({
  title,
  description,
  deleteHandler,
  fileURL,
  viewHandler,
  downloadHandler,
  editHandler,
}: DocumentItemProps) => {
  return (
    <div className="flex justify-between items-center hover:bg-black hover:bg-opacity-5 hover:cursor-pointer rounded-md p-3">
      <div className="flex items-center gap-4">
        <div className="">
          <FileEarmarkPostFill size={32} className="fill-iconGrey" />
        </div>
        <div className="">
          <span className="block font-medium">{title}</span>
          <span className="block text-sm text-textGrey">{description}</span>
        </div>
      </div>
      <div className="justify-self-end flex gap-2">
        <IconButton
          Icon={EyeFill}
          onClick={viewHandler}
          data-testid="view-document"
        />
        <IconButton
          Icon={Pencil}
          onClick={editHandler}
          data-testid="edit-document"
        />
        <a href={fileURL} download="Medical document" target="_blank">
          <IconButton
            Icon={CloudDownloadFill}
            onClick={downloadHandler}
            data-testid="download-document"
          />
        </a>
        <IconButton
          Icon={Trash}
          onClick={deleteHandler}
          data-testid="delete-document"
        />
      </div>
    </div>
  );
};

export default DocumentItem;
