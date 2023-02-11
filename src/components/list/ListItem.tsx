import { useContext, useState } from "react";
import { Trash } from "react-bootstrap-icons";
import classNames from "classnames";
import { Info, InformationContext } from "../../contexts/InformationContext";
import ConfirmationContext from "../../contexts/ConfirmationContext";

const ListItem = ({
  info,
}: {
  info: Info;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const actionsStyle = classNames("transition-all duration-500", {
    "hidden opacity-0": !isVisible,
    "block opacity-100": isVisible,
  });

  const confirmCtx = useContext(ConfirmationContext);
  const InformationCtx = useContext(InformationContext);

  const deleteHandler = () => {
    confirmCtx.setConfirm(() => InformationCtx.removeItem(info))
  }

  return (
    <div
      className="flex justify-between items-center hover:bg-black hover:bg-opacity-10 hover:cursor-pointer transition-colors duration-300 py-3 px-4 rounded-lg"
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>{info.title}</div>
      <div className={actionsStyle} onClick={deleteHandler}>
        <Trash />
      </div>
    </div>
  );
};

export default ListItem;
