import { ChangeEvent, useRef } from "react";
import { ArrowUpCircle } from "react-bootstrap-icons";

const FileInput = ({
  handleChange,
}: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white rounded-xl shadow-md w-full p-5">
      <div className="border border-solidBlue rounded-xl p-3 grid place-items-center text-solidBlue border-dashed py-12">
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleChange}
          data-testid="FileInput-input"
        />
        <ArrowUpCircle size={100} />
        <p className="text-solidBlue font-bold text-center my-4">
          Drag and drop files
        </p>
      </div>
      <div className="flex items-center gap-4 my-3">
        <div className="border-t h-[1px] border-gray-300 grow"></div>
        <div>OR</div>
        <div className="border-t h-[1px] border-gray-300 grow"></div>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-solidBlue text-white rounded-full px-8 uppercase py-2 shadow-md hover:shadow-lg"
          onClick={() => inputRef.current?.click()}
        >
          Browse Files
        </button>
      </div>
    </div>
  );
};

export default FileInput;
