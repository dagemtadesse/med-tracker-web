import { useContext, useEffect, useState } from "react";
import { Loader } from "react-feather";
import { Info, InformationContext } from "../../contexts/InformationContext";
import Select from "../form/Select";
import SidePopup from "./SidePopup";

const TranslationPopup = ({
  handleClose,
  type,
}: {
  handleClose: () => void;
  type: string;
}) => {
  const infoCtx = useContext(InformationContext);

  const [language, setLangauge] = useState<string | undefined>(undefined);
  const [isLoding, setIsLoading] = useState(false);
  const [translated, setTranslated] = useState<Info[]>([]);

  useEffect(() => {
    if (language) {
      setIsLoading(true);
      infoCtx
        .translateInformation(type, language)
        .then(setTranslated)
        .then(() => setIsLoading(false));
    }
  }, [language]);

  return (
    <SidePopup handleClose={handleClose} title="Translation">
      <div className="mb-5">
        <Select
          options={["Norwegian", "English", "Polish", "Russians"]}
          placeholder="Select a language"
          onChange={(val) => setLangauge(val)}
          onBlur={function (): void {}}
        />
      </div>

      <div className="flex flex-col mt-3">
        {isLoding && (
          <Loader
            size="24"
            className="text-lightGrey animate-spin block mx-auto"
          />
        )}
        {!isLoding && language && (
          <ul>
            {translated.map((item) => (
              <li className="mb-5" key={item.id}>
                <div className="font-semibold">{item.id}</div>
                <div className="mt-0.5">{item.title}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SidePopup>
  );
};

export default TranslationPopup;
