import React, { useEffect } from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      image: p1,
      tags: ['React JS', 'Tailwind', 'Motion Frammer'],
    },
    {
      id: 2,
      title: 'Coffee E-Commerce',
      image: p2,
      tags: ['HTML', 'Tailwind', 'JavaScript'],
    },
    {
      id: 3,
      title: 'YouTube UI',
      image: p3,
      tags: ['HTML', 'Tailwind'],
    },
    {
      id: 4,
      title: 'LinkTree',
      image: p4,
      tags: ['HTML', 'Tailwind'],
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-screen px-4 lg:pl-[110px] mt-10 lg:mt-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left px-4 lg:px-0">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-purple-500 overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5 lg:p-6">
                <p className="text-lg font-semibold mb-4">{project.title}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
