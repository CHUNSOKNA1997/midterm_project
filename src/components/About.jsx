import React from 'react';
import { Coffee, FolderCheck, GitGraph } from 'lucide-react';
import aboutLogo from '../assets/aboutLogo.svg';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'Tailwind',
    'TypeScript',
  ];

  return (
    <main className="w-full min-h-screen px-4 lg:pl-[110px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row mt-27 gap-12 lg:space-x-32 justify-center items-center ">
          <div className="w-full flex flex-col lg:justify-center items-center gap-7">
            <img
              src={aboutLogo}
              alt="About section illustration"
              className="w-32 sm:w-40 lg:w-64 rounded-full mb-6 lg:mb-0 border-purple-600 border-[2px]"
            />

            <div className="flex justify-center items-center lg:gap-6 lg:mt-0 space-x-7 lg:space-x-7">
              {[
                { icon: Coffee, label: '264 Cups of Coffee' },
                { icon: FolderCheck, label: '8 Repositories' },
                { icon: GitGraph, label: '44 Contributions' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <item.icon size={32} className="text-purple-600" />
                  <p className="text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-white rounded-xl shadow-md p-6 sm:p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center lg:text-left">
              I am passionate about crafting beautiful, efficient, and scalable
              web applications. Specializing in front-end development with
              ReactJS and Tailwind CSS, I focus on creating high-performance,
              responsive interfaces with an emphasis on user experience. I
              thrive in dynamic environments where creativity meets
              functionality.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-200 transition-all duration-300 font-medium hover:cursor-pointer">
                Download my CV
              </button>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                Skills
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
