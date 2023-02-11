import classNames from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import { Info } from "../../contexts/InformationContext";

const Select = ({
  options,
  placeholder,
  onChange,
}: {
  options: string[];
  placeholder: string;
  onChange?: (value?: string) => void;
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState({ width: 0, left: 0, top: 0 });
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);

  useLayoutEffect(() => {
    const boudning = divRef.current?.getBoundingClientRect();
    setStyle({
      width: divRef.current?.scrollWidth || 0,
      left: boudning?.left || 0,
      top: boudning?.bottom || 0,
    });
  }, [divRef.current, isActive]);

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  const selectItemStyle = (num: string) =>
    classNames("px-3 py-2 hover:bg-black hover:bg-opacity-10", {
      "bg-solidBlue bg-opacity-40 hover:bg-solidBlue hover:bg-opacity-80":
        num == value,
    });

  return (
    <>
      <div
        className="border border-gray-400 py-4 px-4 rounded-lg flex justify-between items-center bg-white"
        onClick={() => setIsActive(true)}
        data-testid="Select-wrapper"
        ref={divRef}
      >
        <p className="text-lightGrey" data-testid="Select-label">
          {value || placeholder}
        </p>
        <CaretDownFill size={12} />
      </div>

      {isActive && (
        <div
          className="fixed top-0 w-screen right-0 bottom-0 rounded-sm overflow-hidden z-50"
          onClick={() => setIsActive(false)}
          data-testid="Select-overlay"
        >
          <div
            className="bg-white rounded-md overflow-hidden absolute shadow-xl border border-gray-200 "
            style={{ width: style.width, left: style.left, top: style.top }}
            id="that the problem"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              {options.map((num) => (
                <li
                  className={selectItemStyle(num)}
                  key={num}
                  onClick={() => {
                    setValue(num);
                    setIsActive(false);
                  }}
                >
                  {num}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
