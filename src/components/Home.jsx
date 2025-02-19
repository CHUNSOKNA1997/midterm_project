import React from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/logo.svg';
import { Facebook, Github, Linkedin, Mouse } from 'lucide-react';

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
      <header className="flex flex-col justify-center items-center h-screen bg-[#eeedf1f2] space-y-12">
        <img src={logo} alt="logo" />
        <div className="flex justify-center items-center flex-col space-y-2">
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
          href="mailto:chun.sokna.1222@gmail.com"
          className="bg-red-500 py-3 px-6 rounded-md text-white font-semibold hover:bg-red-400 transition-colors duration-300"
        >
          Hire Me!
        </a>
        <div className="flex absolute bottom-5 flex-col items-center gap-4 animate-[bounce_2s_ease-in-out_infinite]">
          <p className="text-sm font-medium opacity-80">Scroll Down!</p>
          <Mouse
            size={30}
            className="animate-[fadeInOut_2s_ease-in-out_infinite]"
          />
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Home;
