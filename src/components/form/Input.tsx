import classNames from "classnames";
import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

const Input = ({
  lg,
  label,
  onChange,
}: {
  lg: boolean;
  label: string;
  onChange?: ChangeEventHandler;
}) => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

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
    setValue(event.target.value);
    onChange?.(event);
  };

  return (
    <div
      className={`py-4 px-3 ${
        lg ? "h-24" : "h-14"
      } border border-gray-400 rounded-lg w-full relative`}
      onClick={() => setIsActive(true)}
    >
      {!lg && (
        <input
          className="w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-transparent px-3 py-4"
          ref={inputRef}
          data-testid="Input-input"
          onChange={changeHandler}
          onBlur={() => setIsActive(false)}
        />
      )}

      {lg && (
        <textarea
          className="w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-transparent px-3 py-4"
          ref={inputRef}
          data-testid="Input-textarea"
          onBlur={() => setIsActive(false)}
          onChange={changeHandler}
        />
      )}
      <div className={labelStyle}>
        <p className="bg-white px-1" role="label">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Input;
