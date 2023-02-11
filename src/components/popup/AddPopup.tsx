import SearchInput from "../form/SearchInput";
import SidePopup from "./SidePopup";

const AddPopup = ({
  type,
  handleClose,
}: {
  type: string;
  handleClose: () => void;
}) => {
  return (
    <SidePopup handleClose={handleClose} title="Add">
      <SearchInput type={type} close={handleClose}/>
    </SidePopup>
  );
};

export default AddPopup;
