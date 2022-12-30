import classNames from 'classnames'
import React, { useEffect } from 'react'

const Overlay = ({
  children,
  pos,
  handleClose
}: {
  children: React.ReactNode
  pos: 'center' | 'right'
  handleClose: () => void
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })
  
  const style = classNames(
    'bg-black bg-opacity-60 w-screen h-screen fixed z-50 top-0 left-0 flex animate-fadeIn',
    {
      'justify-end': pos == 'right',
      'justify-center items-center': pos == 'center',
    },
  )
  return <div className={style} onClick={handleClose}>{children}</div>
}

export default Overlay
