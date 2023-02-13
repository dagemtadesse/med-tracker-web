import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import ErrorMessage from "./ErrorMessage";

const zerofy = (n: number | undefined) => n || 0;

const Select = ({
  options,
  placeholder,
  error,
  onChange,
  onBlur,
  value
}: {
  options: string[];
  placeholder: string;
  onBlur: () => void;
  error?: string;
  value?: any
  onChange?: (value?: string) => void;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState({ width: 0, left: 0, top: 0 });
  const [isActive, setIsActive] = useState(false);
  const [val, setValue] = useState<string | undefined>(value);

  useEffect(() => {
    const boudning = divRef.current?.getBoundingClientRect();
    let y: number;

    if ((wrapperRef.current?.clientHeight || 0) >= window.innerHeight * 0.89) {
      y = window.innerHeight * 0.05;
    } else if (
      zerofy(wrapperRef.current?.offsetTop) +
        zerofy(wrapperRef.current?.clientHeight) >
      window.innerHeight
    ) {
      y =
        zerofy(boudning?.bottom) -
        (zerofy(boudning?.bottom) +
          zerofy(wrapperRef.current?.clientHeight) -
          window.innerHeight) -
        10;
    } else {
      y = boudning?.bottom || 0;
    }

    setStyle({
      width: divRef.current?.scrollWidth || 0,
      left: boudning?.left || 0,
      top: y,
    });
  }, [divRef.current, isActive]);

  useEffect(() => {
    onChange?.(val);
    // console.log(val)
  }, [val]);

  const selectItemStyle = (num: string) =>
    classNames("px-3 py-2", {
      "bg-solidBlue bg-opacity-40 hover:bg-solidBlue hover:bg-opacity-80":
        num == value,
      "hover:bg-black hover:bg-opacity-10": num != value,
    });

  return (
    <>
      <div
        className={`border relative ${
          !error ? "border-gray-400" : "border-red-500"
        }  rounded-lg flex justify-between items-center bg-white`}
        onClick={() => setIsActive(true)}
        data-testid="Select-wrapper"
        ref={divRef}
      >
        <input
          className="text-lightGre bg-transparent py-4 px-4 w-full"
          data-testid="Select-label"
          onBlur={onBlur}
          value={val || placeholder}
        />
        <CaretDownFill
          size={12}
          className="absolute right-4 top-[50%] translate-y-[-50%]"
        />
      </div>
      <ErrorMessage msg={error} />

      {isActive && (
        <div
          className="fixed top-0 w-screen right-0 bottom-0 rounded-sm overflow-hidden z-50"
          onClick={() => setIsActive(false)}
          data-testid="Select-overlay"
        >
          <div
            className="bg-white rounded-md overflow-scroll absolute shadow-2xl border border-gray-200 max-h-[90vh]"
            style={{ width: style.width, left: style.left, top: style.top }}
            id="that the problem"
            onClick={(e) => e.stopPropagation()}
            ref={wrapperRef}
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
