import SidePopup from "./SidePopup";

const ViewPopup = ({ close, title }: { close: () => void; title: string }) => {
  return (
    <SidePopup title={title} handleClose={close}>
      <div className="bg-red w-full min-h-full flex justify-center">
        <img
          className="object-contain"
          src="https://www.doyourownwill.com/templates/wp-content/uploads/Living-Will-Declaration-335x433.png"
        />
      </div>
    </SidePopup>
  );
};

export default ViewPopup;
