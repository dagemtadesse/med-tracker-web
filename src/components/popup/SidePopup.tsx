import { ArrowLeft } from 'react-bootstrap-icons'
import Overlay from './Overlay'

const SidePopup = ({
  handleClose,
  title,
  children,
}: {
  handleClose: () => void
  title: string
  children: React.ReactNode
}) => {
  return (
    <Overlay pos="right" handleClose={handleClose}>
      <div
        className="bg-white h-full w-[33.333%] px-6 py-4 animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 pb-4">
          <button onClick={handleClose}>
            <ArrowLeft size={24} />
          </button>
          <span className="font-semibold text-xl">{title}</span>
        </div>

        <div className="">{children}</div>
      </div>
    </Overlay>
  )
}

export default SidePopup
