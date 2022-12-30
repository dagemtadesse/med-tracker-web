import { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import classNames from 'classnames'

const ListItem = ({ label }: { label: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const actionsStyle = classNames('transition-all duration-500', {
    'hidden opacity-0': !isVisible,
    'block opacity-100': isVisible,
  })

  return (
    <div
      className="flex justify-between items-center hover:bg-black hover:bg-opacity-10 transition-colors duration-300 py-3 px-4 rounded-lg"
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>{label}</div>
      <div className={actionsStyle}>
        <Trash />
      </div>
    </div>
  )
}

export default ListItem
