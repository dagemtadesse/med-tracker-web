import classNames from "classnames";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  lg,
  label,
  name,
  error,
  type,
  blurHandler,
  onChange,
  value
}: {
  lg: boolean;
  name: string;
  label: string;
  error: string | undefined;
  type?: "date";
  value?: any
  blurHandler?: React.FocusEventHandler;
  onChange?: ChangeEventHandler;
}) => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const [isActive, setIsActive] = useState(false);

  const labelStyle = classNames(
    "absolute top-0 left-0 right-0 bottom-0 px-3 inline-flex transition-all duration-[255ms] ease-acclerate text-lightGrey",
    {
      "items-center": !isActive && !inputRef.current?.value,
      "items-start -mt-[10px] text-sm": isActive || inputRef.current?.value,
    }
  );

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  });

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(event);
  };

  return (
    <div className="w-full">
      <div
        className={`py-4 px-3 relative ${lg ? "h-24" : "h-14"} border ${
          !error ? "border-gray-400" : "border-red-500"
        } rounded-lg`}
        onClick={() => setIsActive(true)}
      >
        {!lg && (
          <input
            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-transparent px-3 py-4"
            ref={inputRef}
            name={name}
            data-testid="Input-input"
            type={type || "text"}
            onChange={changeHandler}
            value={value}
            onBlur={(e) => {
              setIsActive(false);
              blurHandler?.(e);
            }}
          />
        )}

        {lg && (
          <textarea
            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-transparent px-3 py-4"
            ref={inputRef}
            name={name}
            data-testid="Input-textarea"
            onChange={changeHandler}
            value={value}
            onBlur={(e) => {
              setIsActive(false);
              blurHandler?.(e);
            }}
          />
        )}
        <div className={labelStyle}>
          <p className="bg-white px-1" role="label">
            {label}
          </p>
        </div>
      </div>
      <ErrorMessage msg={error} />
    </div>
  );
};

export default Input;
