import React, { useState } from 'react';
import {
  House,
  CircleUser,
  FolderKanban,
  Contact,
  CodeXml,
  Menu,
  X,
} from 'lucide-react';

const Links = [
  { href: '#home', logo: <House size={24} />, label: 'Home' },
  { href: '#about', logo: <CircleUser size={24} />, label: 'About' },
  { href: '#projects', logo: <FolderKanban size={24} />, label: 'Projects' },
  { href: '#contact', logo: <Contact size={24} />, label: 'Contact' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg hover:cursor-pointer"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 toggle-menu-bg bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-[110px] lg:w-[100px] bg-[#eeedf1f2] text-black flex flex-col justify-between items-center transition-transform duration-300 shadow-lg
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="mt-20">
          <CodeXml size={50} />
        </div>

        <nav className="w-full flex-1 mt-8 flex flex-col items-center">
          <ul className="flex flex-col space-y-2">
            {Links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="px-6 py-3 flex items-center gap-3 hover:bg-purple-400 hover:text-white transition-colors duration-300 rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.logo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="w-full py-6 border-t text-center">
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
