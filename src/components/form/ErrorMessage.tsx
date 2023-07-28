const ErrorMessage = ({ msg }: { msg: string | undefined }) => {
  return <div className="text-red-500 text-xs ml-4 mt-2 font-light" role="error-message">{msg}</div>;
};

export default ErrorMessage;
