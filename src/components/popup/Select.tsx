import { useRef } from 'react'
import { CaretDownFill } from 'react-bootstrap-icons'

const Select = () => {
  const divRef = useRef(null)
  console.log(divRef?.current?.style.left)
  return (
    <>
      <div
        className="border border-gray-400 py-3 px-4 rounded-md flex justify-between items-center"
        ref={divRef}
      >
        <input value="Norweigan" />
        <CaretDownFill size={14} />
      </div>

      {/* <div className="bg-yellow-500 fixed top-0 left-0 right-0 bottom-0">
        <div className="bg-white rounded-sm p-3 absolute" style={{left: divRef?.current?.style.left || 0}}></div>
      </div> */}
    </>
  )
}

export default Select
