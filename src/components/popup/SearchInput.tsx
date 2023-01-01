import classNames from 'classnames'
import { useRef, useState } from 'react'
import { Search } from 'react-bootstrap-icons'
import Option from './Option'

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)

  const style = classNames('rounded-md flex items-center', {
    'border border-gray-300 ': !isActive,
    'border-2 border-solidBlue': isActive,
  })

  return (
    <>
      <div className={style} onClick={() => inputRef.current?.focus()}>
        <div className="px-3">
          <Search />
        </div>
        <input
          placeholder='Search'
          className="py-2 w-full rounded-md outline-0 focus:outline-0 focus:border-0"
          ref={inputRef}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </div>

      {isActive && (
        <div className="bg-white drop-shadow-md mt-1 rounded-sm py-1">
          <Option label="Paracetamol" code="WMCXL307" />
          <Option label="Paracetamol" code="WMCXL307" />
          <Option label="Paracetamol" code="WMCXL307" />
          <Option label="No Options" />
        </div>
      )}
    </>
  )
}

export default SearchInput
