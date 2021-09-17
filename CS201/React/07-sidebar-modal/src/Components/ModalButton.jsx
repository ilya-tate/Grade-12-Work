import React from 'react'
import { useAppContext } from '../util/context'

const ModalButton = () => {
  const { openModal } = useAppContext();
  return (
    <button className='btn' onClick={openModal}>
      Show Modal
    </button>
  )
}


export default ModalButton
