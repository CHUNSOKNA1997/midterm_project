import React from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/logo.svg';
import { Facebook, Github, Linkedin, Mouse } from 'lucide-react';
import { useRef } from 'react';
import BlurText from '../blocks/TextAnimations/BlurText/BlurText';
const socialMedia = [
  {
    href: 'https://www.facebook.com/sokna.chun.1997',
    icon: <Facebook size={30} />,
  },
  {
    href: 'https://www.linkedin.com/in/chun-sokna-449bba32b/',
    icon: <Linkedin size={30} />,
  },
  {
    href: 'https://github.com/CHUNSOKNA1997',
    icon: <Github size={30} />,
  },
];
const Home = () => {
  const containerRef = useRef(null);
  return (
    <>
      <header className="flex relative flex-col justify-center items-center min-h-screen bg-[#eeedf1f2] space-y-12 text-center">
        <img
          src={logo}
          alt="logo"
          className="border-purple-600 border-[2px] rounded-full"
        />
        <div className="flex text-center items-center flex-col space-y-2 mb-12">
          <BlurText
            text="Ayoooo! This is SOkNA Chun."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl lg:text-4xl mb-12 font-bold text-center"
          />
          <BlurText
            text="Im a Front-End Developer"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl lg:text-3xl mb-12 font-semibold text-center"
          />
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
          className="bg-transparent border-[2px] border-purple-600 py-3 px-6 rounded-md text-black font-semibold hover:bg-purple-200 transition-colors duration-300"
        >
          Hire Me!
        </a>
        <a
          href="#about"
          className="flex bottom-5 flex-col items-center gap-4 animate-[bounce_2s_ease-in-out_infinite] hover:text-purple-500 hover:cursor-pointer transition-colors duration-300"
        >
          <p className="text-sm font-medium opacity-80">Scroll Down!</p>
          <Mouse
            size={30}
            className="animate-[fadeInOut_2s_ease-in-out_infinite]"
          />
        </a>
      </header>
      <Sidebar />
    </>
  );
};

export default Home;
