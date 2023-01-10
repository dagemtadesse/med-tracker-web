import classNames from "classnames";
import { useContext, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import ConfirmationContext from "../../contexts/ConfirmationContext";

const ModalPopup = () => {
  const [isExiting, setIsExiting] = useState(false);
  const confirmCtx = useContext(ConfirmationContext);

  const popupStyle = classNames(
    "bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 fixed z-[1000] grid place-items-center",
    {
      "animate-fadeIn": !isExiting,
      "animate-fadeOut": isExiting,
    }
  );

  const handleClose = () => {
    if (isExiting) {
      confirmCtx.setConfirm(null);
    }
  };

  const handleConfirm = async () => {
    if (confirmCtx.confirm) {
      await confirmCtx.confirm();
    }
    handleClose();
  };

  return (
    <div className={popupStyle} onAnimationEnd={handleClose}>
      <div className="bg-white rounded-3xl p-12 grid-rows-[2fr_1fr_1fr] grid max-h-[80vh] h-[787px] w-[626px]">
        <div className="flex justify-center self-center">
          <TrashFill size={120} className="fill-solidBlue" />
        </div>
        <div className="flex-row text-center self-center">
          <h1 className="text-5xl font-bold text-textDark">Confirm Deletion</h1>
          <p className="text-xl mt-4 text-textDark">Delete this item?</p>
        </div>
        <div className="flex justify-center gap-8 self-end">
          <button
            onClick={() => setIsExiting((val) => !val)}
            className="border-solidBlue border rounded-full text-solidBlue px-20 py-2 hover:bg-solidBlue hover:bg-opacity-5"
          >
            Cancel
          </button>
          <button
            className="bg-solidBlue rounded-full text-white box-shadow px-20 py-2 shadow hover:shadow-lg"
            onClick={handleConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
