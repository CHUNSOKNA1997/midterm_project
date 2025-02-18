import React from 'react';
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
    <main className="ml-0 lg:ml-[110px] w-full min-h-screen">
      <div className="w-full p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            About Me
          </h1>

          <div className="flex flex-col justify-center items-center lg:flex-row gap-6 sm:gap-17 lg:items-start">
            <div className="w-48 sm:w-64 lg:w-80">
              <img
                src={aboutLogo}
                alt="About section illustration"
                className="w-full rounded-4xl"
              />
            </div>

            <div className="w-full lg:w-1/2 bg-white rounded-xl">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    Passionate about crafting beautiful, efficient, and scalable
                    web applications, I specialize in front-end development
                    using ReactJS and Tailwind CSS. With a keen eye for design
                    and a focus on user experience, I create responsive,
                    high-performance interfaces that bring ideas to life.
                    Whether building sleek dashboards, interactive components,
                    or modern web apps, I love leveraging the power of React's
                    ecosystem and Tailwind's utility-first approach to
                    streamline development. Always eager to learn and push the
                    boundaries of front-end development, I thrive in dynamic
                    environments where creativity meets functionality.
                  </p>
                  <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 w-full sm:w-auto font-medium hover:cursor-pointer">
                    Download my CV
                  </button>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 hover:cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
