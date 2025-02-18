import React from 'react';
import {
  House,
  CircleUser,
  FolderKanban,
  Contact,
  CodeXml,
} from 'lucide-react';
const Links = [
  {
    href: '#Home',
    name: 'Home',
    logo: <House size={24} />,
  },
  {
    href: '#About',
    name: 'About',
    logo: <CircleUser size={24} />,
  },
  {
    href: '#Projects',
    name: 'Projects',
    logo: <FolderKanban size={24} />,
  },
  {
    href: '#Contact',
    name: 'Contact',
    logo: <Contact size={24} />,
  },
];
const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-[120px] min-h-full border-opacity bg-[#f9f7fd] text-black flex flex-col justify-between items-center">
      <CodeXml size={50} className="mt-8 font-bold" />
      <ul>
        <li className="flex flex-col gap-15 items-start">
          {Links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.href}
                className="flex gap-2 items-center hover:text-orange-500 transition-all duration-300"
              >
                {link.logo}
                {link.name}
              </a>
            );
          })}
        </li>
      </ul>
      <footer>
        <p className="text-center mb-8">&copy; {new Date().getFullYear()}</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
