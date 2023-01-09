import classNames from "classnames";
import { useLayoutEffect, useRef, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";

const Select = ({options, placeholder}: {options: string[], placeholder: string}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState({ width: 0, left: 0, top: 0 });
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  useLayoutEffect(() => {
    const boudning = divRef.current?.getBoundingClientRect();
    setStyle({
      width: divRef.current?.scrollWidth || 0,
      left: boudning?.left || 0,
      top: boudning?.bottom || 0,
    });
  }, [divRef.current, isActive]);

  const selectItemStyle = (num: string) =>
    classNames("px-3 py-2 hover:bg-black hover:bg-opacity-10", {
      "bg-solidBlue bg-opacity-40 hover:bg-solidBlue hover:bg-opacity-80":
        num == value,
    });

  return (
    <>
      <div
        className="border border-gray-400 py-3 px-4 rounded-lg flex justify-between items-center bg-white"
        onClick={() => setIsActive(true)}
        data-testid="Select-wrapper"
        ref={divRef}
      >
        <p className="text-lightGrey" data-testid="Select-label">{value || placeholder}</p>
        <CaretDownFill size={14} />
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
