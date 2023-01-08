const IconButton = ({ Icon }: { Icon: any }) => {
  const defaultProps = { className: 'fill-iconGrey' }
  return (
    <button className="rounded-full hover:bg-black hover:bg-opacity-10 p-2 transition-all duration-500">
      <Icon {...defaultProps} />
    </button>
  )
}

export default IconButton
