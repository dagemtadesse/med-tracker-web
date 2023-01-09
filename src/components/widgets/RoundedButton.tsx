const RoundedButton = ({ label, Icon, onClick }: { label: string; Icon: any, onClick?: () => void }) => {
  return (
    <button className="border border-gray-400 rounded-full px-4 py-1 flex items-center gap-2 hover:bg-black hover:bg-opacity-5 font-medium" onClick={onClick}>
      <span>
        <Icon size={18}/>
      </span>

      {label}
    </button>
  )
}

export default RoundedButton
