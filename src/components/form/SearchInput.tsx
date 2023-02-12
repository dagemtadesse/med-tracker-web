import classNames from "classnames";
import { ChangeEvent, useContext, useRef, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Info, InformationContext } from "../../contexts/InformationContext";
import Option from "../list/Option";

const SearchInput = ({ type, close }: { type: string; close: () => void }) => {
  const informationCtx = useContext(InformationContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const [options, setOptions] = useState<Info[]>([]);
  const [isActive, setIsActive] = useState(false);

  const style = classNames("rounded-md flex items-center", {
    "border border-gray-300 ": !isActive,
    "border-2 border-solidBlue": isActive,
  });

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setOptions(await informationCtx.searchInformation(type, e.target.value));
  };

  return (
    <>
      <div className={style} onClick={() => inputRef.current?.focus()}>
        <div className="px-3">
          <Search />
        </div>
        <input
          placeholder="Search"
          className="py-2 w-full rounded-md outline-0 focus:outline-0 focus:border-0"
          ref={inputRef}
          data-testid="Search-input"
          onChange={changeHandler}
          onFocus={() => setIsActive(true)}
          onBlur={() => setTimeout(() => setIsActive(false), 500)}
        />
      </div>

      {isActive && (
        <div
          className="bg-white drop-shadow-md mt-1 rounded-sm py-1"
          role="list"
        >
          {options.map((option: Info) => (
            <Option
              label={option.title}
              code={option.id}
              key={option.id}
              onClick={(e) => {
                e.stopPropagation();
                informationCtx.addInformation(option);
              }}
            />
          ))}

          {!options.length && <Option label="No Options" />}
        </div>
      )}
    </>
  );
};

export default SearchInput;
