import React from "react";
import logo from "../util/logo.svg";
import { Link } from "react-router-dom";
import { links, socials } from "../util/const";
import { useAppContext } from "../util/context";
import { FaTimes } from "react-icons/fa";

const filterList = ['Error']

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useAppContext();
  return <aside className={`sidebar ${sidebarOpen && 'show-sidebar'}`}>
    <div className="sidebar-header">
      <img src={logo} alt="logo" className='logo' />
      <button onClick={closeSidebar} className='close-btn'>
        <FaTimes />
      </button>
    </div>
    <ul className="links">
      {links
      .filter((link) => !filterList.includes(link.text))
      .map((link) => {
        const {url, icon,  id, text} = link
        return (
          <li key={id}>
            <Link to={url}>
              {icon} {text}
            </Link>
          </li>
        )
      })}
    </ul>
  </aside>
};

export default Sidebar;
