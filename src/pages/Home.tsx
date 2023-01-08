import classnames from "classnames";
import { useState } from "react";
import {
  BandaidFill,
  Capsule,
  Clipboard2PlusFill,
  FolderFill,
  HeartPulseFill,
} from "react-bootstrap-icons";
import Accordion from "../components/widgets/Accordion";
import DocumentWrapper from "../components/list/DocumentWrapper";
import ListItem from "../components/list/ListItem";
import ModalPopup from "../components/modal/Modal";
import AddPopup from "../components/popup/AddPopup";
import TranslationPopup from "../components/popup/TranslationPopup";
import OrderCard from "../assets/order-card.png";
import ViewProfile from "../components/profile/ViewProfile";
import NewDocumentPopup from "../components/popup/NewDocumentPopup";

const items = [{ label: "Vaccine" }, { label: "Flu Shot" }];
const document = [
  {
    category: "Travel Document",
    items: [
      { title: "Vaccine", description: "I have taken vaccine" },
      { title: "Vaccine", description: "I have taken vaccine" },
    ],
  },
  {
    category: "Journal",
    items: [
      { title: "Vaccine", description: "I have taken vaccine" },
      { title: "Vaccine", description: "I have taken vaccine" },
    ],
  },
];

type Action = {
  action: "translate" | "add" | "share";
  data: any[];
};

const Home = () => {
  const [isPopupShown, setISPopupShown] = useState(true);
  const [isProfileShown, setIsProfileShown] = useState(false);
  const [addNewDoc, setAddNewDoc] = useState(false);

  const [action, setAction] = useState<Action | null>(null);

  return (
    <>
      <header className="bg-white">
        <nav className="flex flex-row-reverse pt-[80px] px-[64px]">
          <ul className="flex gap-8">
            <NavItem label={"Home"} active />
            <NavItem label={"Terms & service"} />
            <NavItem label={"Logout"} />
          </ul>
        </nav>
      </header>

      <main className="p-8">
        <div className="max-w-3xl mx-auto my-5 text-2xl font-medium">
          <span className="mr-4">👋🏻</span>Good morning Dagem Tadesse
        </div>
        {/* profile */}
        <div className="bg-white max-w-3xl mx-auto rounded-2xl drop-shadow-md mb-6 p-5">
          <div className="text-xl font-medium">Dagem Tadesse</div>
          <p className="text-sm text-lightGrey mt-0.5">Member since 2002</p>
          <button
            className="text-sm mt-1 font-medium text-textGrey"
            onClick={() => setIsProfileShown(true)}
          >
            (Click here to Edit profile)
          </button>
        </div>
        <Accordion
          title="Allergies"
          Icon={Capsule}
          items={items}
          Wrapper={ListItem}
          addHandler={() => setAction({ action: "add", data: [] })}
          translationHandler={() =>
            setAction({ action: "translate", data: [] })
          }
          shareHandler={() => {}}
        />

        <Accordion
          title="Medicine"
          Icon={HeartPulseFill}
          items={items}
          Wrapper={ListItem}
          addHandler={() => {}}
          translationHandler={() => {}}
          shareHandler={() => {}}
        />
        <Accordion
          title="Diagnoses"
          Icon={Clipboard2PlusFill}
          items={items}
          Wrapper={ListItem}
          addHandler={() => {}}
          translationHandler={() => {}}
          shareHandler={() => {}}
        />
        <Accordion
          title="Vaccines"
          Icon={BandaidFill}
          items={items}
          Wrapper={ListItem}
          addHandler={() => {}}
          translationHandler={() => {}}
          shareHandler={() => {}}
        />
        <Accordion
          title="Documents"
          Icon={FolderFill}
          items={document}
          Wrapper={DocumentWrapper}
          addHandler={() => {setAddNewDoc(true)}}
        />

        <div className="bg-white max-w-3xl mx-auto rounded-2xl drop-shadow-md mb-6 mt-16">
          <div className="p-5 flex gap-4">
            <div className="text-sm">
              <h2 className="text-lg">Your Card</h2>
              <p className="font-light text-lightGrey mt-2">
                Enjoy all the features of your World Medical Card from your
                wallet
              </p>
              <p className="text-textGrey font-medium mt-6">
                Card can be reordered in 262 days
              </p>
            </div>
            <div className="max-w-[40%] relative basis-[40%]">
              <img src={OrderCard} className="absolute bottom-0 right-0" />
            </div>
          </div>
        </div>

        {action && action.action == "translate" && (
          <TranslationPopup handleClose={() => setAction(null)} />
        )}

        {action && action.action == "add" && (
          <AddPopup handleClose={() => setAction(null)} />
        )}

        {isPopupShown && <ModalPopup close={() => setISPopupShown(false)} />}
        {isProfileShown && (
          <ViewProfile close={() => setIsProfileShown(false)} />
        )}

        {addNewDoc && <NewDocumentPopup close={() => setAddNewDoc(false)}/>}
      </main>
    </>
  );
};

export default Home;

type NavItemProps = {
  active?: boolean;
  label: string;
};

const NavItem = ({ active, label }: NavItemProps) => {
  const style = classnames("py-3 relative", {
    "text-solidBlue": !!active,
  });

  return (
    <li className={style}>
      <a href="">{label}</a>
      {active && (
        <span className="w-full h-[2px] bg-solidBlue block absolute bottom-0"></span>
      )}
    </li>
  );
};
