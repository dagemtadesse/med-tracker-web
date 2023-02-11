const ErrorMessage = ({ msg }: { msg: string | undefined }) => {
  return <div className="text-red-500 text-xs ml-4 mt-2 font-light">{msg}</div>;
};

export default ErrorMessage;
