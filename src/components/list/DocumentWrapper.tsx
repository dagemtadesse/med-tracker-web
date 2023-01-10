import { useContext } from "react";
import ConfirmationContext from "../../contexts/ConfirmationContext";
import DocumentItem from "./DocumentItem";

const DocumentWrapper = ({
  category,
  items,
}: {
  category: string;
  items: any[];
}) => {
  const confirmCtx = useContext(ConfirmationContext);

  const deleteHandler = () => {
    confirmCtx.setConfirm(async () => console.log("delete button clicked"));
  };

  return (
    <div>
      <h2 className="font-medium mb-3 mt-1 text-lg capitalize">{category}</h2>
      {items.map((item) => (
        <DocumentItem {...item} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};

export default DocumentWrapper;
