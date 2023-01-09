const IconButton = ({ Icon, onClick }: { Icon: any; onClick?: () => void }) => {
  const defaultProps = { className: "fill-iconGrey" };
  return (
    <button
      className="rounded-full hover:bg-black hover:bg-opacity-10 p-2 transition-all duration-500"
      onClick={onClick}
    >
      <Icon {...defaultProps} />
    </button>
  );
};

export default IconButton;
