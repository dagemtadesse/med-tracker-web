import SidePopup from "./SidePopup";

const ViewPopup = ({ close, title, document }: { document: any; close: () => void; title: string }) => {
  return (
    <SidePopup title={title} handleClose={close}>
      <div className="bg-red w-full min-h-full flex justify-center">
        <img
          className="object-contain"
          src={document.fileURL}
        />
      </div>
    </SidePopup>
  );
};

export default ViewPopup;
