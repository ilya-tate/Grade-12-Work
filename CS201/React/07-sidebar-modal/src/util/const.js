import React from "react";

import {
  FaBehance,
  FaFacebook,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaLinkedinIn,
} from "react-icons/fa";

import Home from '../Pages/Home'
import Team from '../Pages/Team'
import Projects from '../Pages/Projects'
import Calendar from '../Pages/Calendar'
import Documents from '../Pages/Documents'
import Error from '../Pages/Error'

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
    page: <Home />
  },
  {
    id: 2,
    url: "/team",
    text: "Team",
    icon: <FaUserFriends />,
    page: <Team />
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <FaFolderOpen />,
    page: <Projects />
  },
  {
    id: 4,
    url: "/calendar",
    text: "Calendar",
    icon: <FaCalendarAlt />,
    page: <Calendar />
  },
  {
    id: 5,
    url: "/documents",
    text: "Documents",
    icon: <FaWpforms />,
    page: <Documents />
  },
  {
    id: 6,
    url: "*",
    text: "Error",
    icon: null,
    page: <Error />
  },
];


export const socials = [
  {
    id: 1,
    url: 'https',
    icon: <FaFacebook />
  },
  {
    id: 2,
    url: 'https',
    icon: <FaTwitter />
  },
  {
    id: 2,
    url: 'https',
    icon: <FaLinkedinIn />
  },
  {
    id: 3,
    url: 'https',
    icon: <FaBehance />
  },
  {
    id: 4,
    url: 'https',
    icon: <FaSketch />
  }
  
]