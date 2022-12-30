const RoundedButton = ({ label, Icon }: { label: string; Icon: any }) => {
  return (
    <button className="border border-gray-400 rounded-full px-4 py-1 flex items-center gap-2 hover:bg-black hover:bg-opacity-5 font-medium">
      <span>
        <Icon size={18}/>
      </span>

      {label}
    </button>
  )
}

export default RoundedButton
