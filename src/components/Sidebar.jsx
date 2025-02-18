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
  { href: '#Home', name: 'Home', logo: <House size={24} /> },
  { href: '#About', name: 'About', logo: <CircleUser size={24} /> },
  { href: '#Projects', name: 'Projects', logo: <FolderKanban size={24} /> },
  { href: '#Contact', name: 'Contact', logo: <Contact size={24} /> },
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
        className={`fixed top-0 left-0 z-40 h-screen w-[170px] lg:w-[200px] bg-[#f9f7fd] text-black flex flex-col justify-between items-center transition-transform duration-300 shadow-lg
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="mt-8">
          <CodeXml size={50} />
        </div>

        <nav className="w-full flex-1 mt-8">
          <ul className="flex flex-col space-y-2">
            {Links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="px-6 py-3 flex items-center gap-3 hover:bg-orange-100 hover:text-orange-500 transition-all duration-300 rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.logo}
                  {link.name}
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
