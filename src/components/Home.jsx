import React from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/logo.svg';
import { Facebook, Github, Linkedin } from 'lucide-react';

const socialMedia = [
  {
    href: '#',
    icon: <Facebook size={30} />,
  },
  {
    href: '#',
    icon: <Linkedin size={30} />,
  },
  {
    href: '#',
    icon: <Github size={30} />,
  },
];
const Home = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center h-screen bg-[#eeedf1f2] space-y-7">
        <img src={logo} alt="logo" />
        <div className="flex justify-center items-center flex-col leading-12">
          <h1 className="text-purple-400 text-4xl font-bold">SOkNA Chun.</h1>
          <p className="font-semibold text-xl">
            Hiiii! I'm a Front-End Developer
          </p>
        </div>
        <ul>
          <li className="flex space-x-4">
            {socialMedia.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              );
            })}
          </li>
        </ul>
        <a
          href="#"
          className="bg-red-500 py-3 px-6 rounded-md text-white font-semibold hover:bg-red-400 transition-colors duration-300"
        >
          Hire Me!
        </a>
      </header>
      <Sidebar />
    </>
  );
};

export default Home;
