import React, { useState, useEffect } from 'react';
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
  { href: '#home', icon: <House size={24} />, label: 'Home', id: 'home' },
  {
    href: '#about',
    icon: <CircleUser size={24} />,
    label: 'About',
    id: 'about',
  },
  {
    href: '#projects',
    icon: <FolderKanban size={24} />,
    label: 'Projects',
    id: 'projects',
  },
  {
    href: '#contact',
    icon: <Contact size={24} />,
    label: 'Contact',
    id: 'contact',
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    Links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
    setActiveSection(href.replace('#', ''));
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200 lg:hidden hover:cursor-pointer"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          w-64 lg:w-20 bg-white/90 backdrop-blur-sm
          flex flex-col items-center
          shadow-lg transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="mt-8 mb-8">
          <CodeXml size={40} className="text-purple-600" />
        </div>

        <nav className="flex-1 w-full">
          <ul className="space-y-2 px-3">
            {Links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`
                      flex items-center gap-4 px-4 py-3 rounded-lg
                      transition-all duration-200 group relative
                      ${
                        isActive
                          ? 'bg-purple-100 text-purple-600'
                          : 'text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    title={link.label}
                  >
                    <span
                      className={`
                        transition-colors duration-200
                        ${
                          isActive
                            ? 'text-purple-600'
                            : 'text-gray-500 group-hover:text-purple-600'
                        }
                      `}
                    >
                      {link.icon}
                    </span>
                    <span
                      className={`lg:hidden ${isActive ? 'font-medium' : ''}`}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="absolute left-0 w-1 h-8 bg-purple-600 rounded-r-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <footer className="w-full py-4 px-3 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </aside>

      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-600 transition-all duration-200 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default Sidebar;
