import React from 'react';
import '../css/Team.css';

const people = [
  {
    name: 'Nicolas Chavanoud',
    role: 'Junior Web Developer',
    imageUrl: 'https://i.ibb.co/vP8h6YR/nico.jpg',
    githubUrl: 'https://github.com/NycoChavanoud',
    linkedinUrl: 'https://www.linkedin.com/in/nicolas-chavanoud-b49a3568/',
  },
  {
    name: 'Jordane Laurent',
    role: 'Junior Web Developer',
    imageUrl: 'https://i.ibb.co/LvLH57s/90244468.jpg',
    githubUrl: 'https://github.com/JoLrt-dev',
    linkedinUrl:
      'https://www.linkedin.com/in/jordane-laurent-mandim-sobral-5b0b0020a/',
  },
  {
    name: 'Léa Weibel ',
    role: 'Fake Student / Senior Lead Developer',
    imageUrl: 'https://i.ibb.co/kB3pjmg/empty-Avatar.png',
    githubUrl: 'https://github.com/lea-weibel',
    linkedinUrl: 'https://www.linkedin.com/in/l%C3%A9a-weibel/',
  },
  {
    name: 'William Louis-Louisy',
    role: 'Junior Web Developer',
    imageUrl: 'https://i.ibb.co/F5gvDpF/wll.jpg',
    githubUrl: 'https://github.com/William-Louis-Louisy',
    linkedinUrl: 'https://www.linkedin.com/in/nicolas-chavanoud-b49a3568/',
  },
];

export default function Team() {
  return (
    <div>
      <div className="bg-apricot-pink">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-dark-sienna tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-english-red">
                The Trip@Wilders development crew.
              </p>
            </div>
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="flex justify-center py-10 px-6 bg-melon-pink text-center rounded-lg xl:px-10 xl:text-left shadow-2xl"
                >
                  <div className="space-y-6 xl:space-y-10">
                    <img
                      className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out border-solid border-4 border-dark-sienna shadow-xl hover:border-english-red"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-dark-sienna transform hover:scale-110 motion-reduce:transform-none">
                          {person.name}
                        </h3>
                        <p className="text-english-red transform hover:scale-110 motion-reduce:transform-none">
                          {person.role}
                        </p>
                      </div>

                      <ul className="flex justify-center space-x-5 ">
                        <li>
                          <a
                            href={person.githubUrl}
                            className="text-dark-sienna transition duration-500 ease-in-out hover:text-english-red"
                          >
                            <span className="sr-only">GitHub</span>
                            <svg
                              className="animate-bounce"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className="text-dark-sienna transition duration-500 ease-in-out hover:text-english-red"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="animate-bounce"
                              width="24"
                              height="24"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
