const Option = ({
  label,
  code,
  onClick,
}: {
  label: string;
  code?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="py-2 px-4 hover:bg-black hover:bg-opacity-5 cursor-pointer"
      onClick={onClick}
    >
      <div>{label}</div>
      {code && <div className="text-sm mt-1">{code}</div>}
    </div>
  );
};

export default Option;
