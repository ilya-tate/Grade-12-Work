import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from '../util/context'

const SidebarButton = () => {
  const {openSidebar} = useAppContext();
  return (
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars/>
    </button>
  )
}


export default SidebarButton
