import { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'

const SidePopup = ({
  handleClose,
  title,
  children,
}: {
  handleClose: () => void
  title: string
  children: React.ReactNode
}) => {
  const [isExiting, setIsExiting] = useState<boolean | null>(null)

  useEffect(() => {
    setIsExiting(false)
  }, [])

  const closeSidePopup = (event: any) => {
    event.stopPropagation()
    setIsExiting(true)
  }

  return (
    <div
      className="bg-black bg-opacity-60 w-screen h-screen fixed z-50 top-0 left-0 flex justify-end transition-all duration-300"
      onClick={closeSidePopup}
      style={{ opacity: isExiting !== false ? 0 : 1 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={() => {
          if (isExiting) handleClose()
        }}
        className="bg-white h-full w-[33.333%] px-6 py-4 transition-transform duration-300"
        style={{
          transform: isExiting !== false ? 'translateX(100%)' : 'translateX(0)',
        }}
      >
        <div className="flex items-center gap-4 pb-4">
          <button onClick={closeSidePopup}>
            <ArrowLeft size={24} />
          </button>
          <span className="font-medium text-xl">{title}</span>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default SidePopup
