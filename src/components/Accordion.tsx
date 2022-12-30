import classnames from 'classnames'
import { useState } from 'react'
import { ChevronDown, Capsule } from 'react-bootstrap-icons'

type props = {
  title: string
  Icon: any
  items: any[]
  Wrapper: any
  children?: JSX.Element
}

const Accordion = ({ title, Icon, items, Wrapper, children }: props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const chevronStyle = classnames('fill-textGrey transition-all duration-300', {
    'rotate-180': isExpanded,
  })

  const toggleAccordion = ({}) => setIsExpanded((value) => !value)

  return (
    <div className="bg-white p-5 max-w-3xl mx-auto rounded-2xl drop-shadow-md mb-6">
      <div
        className="flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <div className="flex gap-6 items-center">
          <Icon size={36} className="fill-iconGrey" />
          <div>
            <h2 className="text-xl">{title}</h2>
            <p className="text-textGrey text-sm mt-1">{items.length} items</p>
          </div>
        </div>

        <button>
          <ChevronDown size={24} className={chevronStyle} />
        </button>
      </div>

      {isExpanded && (
        <>
          <div className=" border-t border-gray-200 mt-5 overflow-hidden py-4">
            {items.map((item) => (
              <Wrapper {...item} />
            ))}
          </div>

          <div className="flex gap-4">{children}</div>
        </>
      )}
    </div>
  )
}

export default Accordion
