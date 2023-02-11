import classnames from "classnames";
import { useContext, useState } from "react";
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
import ViewPopup from "../components/popup/ViewPopup";
import ConfirmationContext from "../contexts/ConfirmationContext";
import DocumentContext from "../contexts/DocumentContext";
import { InformationContext } from "../contexts/InformationContext";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { user } from "../contexts/dummy-data";

type Action = {
  action: "translate" | "add" | "share";
  type: "allergies" | "medicines" | "diagnoses" | "vaccines";
};

const Home = () => {
  const [isProfileShown, setIsProfileShown] = useState(false);

  const [action, setAction] = useState<Action | null>(null);

  const confirmCtx = useContext(ConfirmationContext);
  const infoCtx = useContext(InformationContext);
  const documentCtx = useContext(DocumentContext);
  const userCtx = useContext(UserContext);

  return (
    <>
      <header className="bg-white">
        <nav className="flex flex-row-reverse px-[64px]">
          <ul className="flex gap-8">
            <NavItem label={"Home"} to={"/home"} active />
            <NavItem label={"Terms & conditions"} to="/terms-and-conditions" />
            <NavItem label={"Logout"} to="/" />
          </ul>
        </nav>
      </header>

      <main className="p-8">
        <div className="max-w-3xl mx-auto my-5 text-2xl font-medium">
          <span className="mr-4">👋🏻</span>Good morning{" "}
          {`${userCtx.user?.firstName} ${userCtx.user?.lastName}`}
        </div>
        {/* profile */}
        <div className="bg-white max-w-3xl mx-auto rounded-2xl drop-shadow-md mb-6 p-5">
          <div className="text-xl font-medium">{`${userCtx.user?.firstName} ${userCtx.user?.lastName}`}</div>
          <p className="text-sm text-lightGrey mt-0.5">
            <>Member since {user.createdAt || new Date().getFullYear()}</>
          </p>
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
          items={infoCtx.informations.filter(
            (item) => item.type == "allergies"
          )}
          Wrapper={ListItem}
          addHandler={() => setAction({ action: "add", type: "allergies" })}
          translationHandler={() =>
            setAction({ action: "translate", type: "allergies" })
          }
          shareHandler={() => infoCtx.shareInformation("allergies")}
        />

        <Accordion
          title="Medicines"
          Icon={HeartPulseFill}
          items={infoCtx.informations.filter(
            (item) => item.type == "medicines"
          )}
          Wrapper={ListItem}
          addHandler={() => setAction({ action: "add", type: "medicines" })}
          translationHandler={() =>
            setAction({ action: "translate", type: "medicines" })
          }
          shareHandler={() => infoCtx.shareInformation("medicines")}
        />

        <Accordion
          title="Diagnoses"
          Icon={Clipboard2PlusFill}
          items={infoCtx.informations.filter(
            (item) => item.type == "diagnoses"
          )}
          Wrapper={ListItem}
          addHandler={() => setAction({ action: "add", type: "diagnoses" })}
          translationHandler={() =>
            setAction({ action: "translate", type: "diagnoses" })
          }
          shareHandler={() => infoCtx.shareInformation("diagnoses")}
        />

        <Accordion
          title="Vaccines"
          Icon={BandaidFill}
          items={infoCtx.informations.filter((item) => item.type == "vaccines")}
          Wrapper={ListItem}
          addHandler={() => setAction({ action: "add", type: "vaccines" })}
          translationHandler={() =>
            setAction({ action: "translate", type: "vaccines" })
          }
          shareHandler={() => infoCtx.shareInformation("vaccines")}
        />

        <Accordion
          title="Documents"
          Icon={FolderFill}
          items={documentCtx.documents}
          addHandler={() => {
            documentCtx.setCurrentDocument({
              title: "",
              description: "",
              type: "",
            });
          }}
        >
          <DocumentWrapper />
        </Accordion>

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
          <TranslationPopup
            handleClose={() => setAction(null)}
            type={action.type}
          />
        )}

        {action && action.action == "add" && (
          <AddPopup handleClose={() => setAction(null)} type={action.type} />
        )}

        {isProfileShown && (
          <ViewProfile
            close={() => setIsProfileShown(false)}
            user={userCtx.user!}
          />
        )}

        {documentCtx.currentDocument && <NewDocumentPopup />}

        {documentCtx.viewDocument && (
          <ViewPopup
            title="View Document(s)"
            close={() => documentCtx.setAViewDocument(undefined)}
          />
        )}

        {!!confirmCtx.confirm && <ModalPopup />}
      </main>
    </>
  );
};

export default Home;

type NavItemProps = {
  active?: boolean;
  label: string;
  to: string;
};

const NavItem = ({ active, label, to }: NavItemProps) => {
  const style = classnames("py-3 relative text-sm capitalize", {
    "text-solidBlue": !!active,
  });

  return (
    <li className={style}>
      <Link to={to}>{label}</Link>
      {active && (
        <span className="w-full h-[2px] bg-solidBlue block absolute bottom-0"></span>
      )}
    </li>
  );
};
