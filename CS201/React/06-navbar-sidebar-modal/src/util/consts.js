import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";
import { Home, Error, About, Cart, Products } from "../Pages";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    page: <Home /> 
  },
  {
    id: 2,
    url: '*',
    text: 'Error',
    page: <Error />
  },
  {
    id: 3,
    url: '/about',
    text: 'About',
    page: <About /> 
  },
  {
    id: 4,
    url: '/cart',
    text: 'Cart',
    page: <Cart /> 
  },
  {
    id: 5,
    url: '/products',
    text: 'Products',
    page: <Products /> 
  },
];

export const socials = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />
  },
  {
    id: 2,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />
  }
];
