import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({children}) => {

    const elRef = useRef(null) // You can think of it as a container to give you the exact same thing each time!

    if (!elRef.current) { 
        elRef.current = document.createElement('div')
    }

    useEffect(() => {
      const modalRoot = document.getElementById('modal') // get new html div  
      modalRoot.appendChild(elRef.current)  // append the ref.

      // need a clean up || componentWillUnmount
      return () => modalRoot.removeChild(elRef.current) 
    }, []);

  return createPortal(
    <div>{children}</div>, elRef.current
  )
}

export default Modal