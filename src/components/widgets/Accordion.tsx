import classnames from "classnames";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, Globe, PlusLg, ShareFill } from "react-bootstrap-icons";
import RoundedButton from "./RoundedButton";

type props = {
  title: string;
  Icon: any;
  items: any[];
  Wrapper?: any;
  addHandler?: () => void;
  translationHandler?: () => void;
  shareHandler?: () => void;
  children?: ReactNode;
};

const Accordion = ({
  title,
  Icon,
  items,
  Wrapper,
  addHandler,
  translationHandler,
  shareHandler,
  children,
}: props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const it = useRef<HTMLDivElement>(null);

  const chevronStyle = classnames("fill-textGrey transition-all duration-300", {
    "rotate-180": isExpanded,
  });

  useLayoutEffect(() => {
    setTimeout(() => setChildHeight(it.current?.scrollHeight ?? 0));
  });

  const toggleAccordion = () => {
    if (isExpanded) setIsClosing(true);
    else setIsExpanded(true);
  };

  return (
    <div className="bg-white max-w-3xl mx-auto rounded-2xl drop-shadow-md mb-6">
      <div
        className="flex justify-between items-center hover:cursor-pointer p-5 rounded-2xl"
        onClick={toggleAccordion}
      >
        <div className="flex gap-6 items-center">
          <Icon size={36} className="fill-iconGrey" />
          <div>
            <h2 className="text-xl">{title}</h2>
            <p className="text-textGrey text-sm mt-1">{items.length} items</p>
          </div>
        </div>

        <button>
          <ChevronDown size={24} className={chevronStyle} />
        </button>
      </div>

      {isExpanded && (
        <div
          className="p-5 pt-0 transition-all duration-300 ease-acclerate max-h-0 overflow-hidden"
          style={{
            maxHeight: isClosing ? 0 : childHeight,
            padding: isClosing ? "0 1.25em" : "1.25em",
          }}
          ref={it}
          onTransitionEnd={() => {
            if (isClosing) {
              setIsClosing(false);
              setIsExpanded(false);
            }
          }}
        >
          <div className="border-t border-gray-200 py-4">
            {!!children && children}
            {!children && items.map((item) => <Wrapper {...item} />)}
          </div>

          <div className="flex gap-4">
            {addHandler && (
              <RoundedButton label="Add" Icon={PlusLg} onClick={addHandler} />
            )}
            {items.length > 0 && translationHandler && (
              <RoundedButton
                label="Translation"
                Icon={Globe}
                onClick={translationHandler}
              />
            )}
            {items.length > 0 && shareHandler && (
              <RoundedButton
                label="Share"
                Icon={ShareFill}
                onClick={shareHandler}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
