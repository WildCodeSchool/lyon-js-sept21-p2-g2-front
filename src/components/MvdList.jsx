import React from 'react';
import '../css/MvdList.css';

export default function MvdList() {
  const mvd = [
    {
      name: 'Cayman Islands',
      imageUrl: 'https://flagcdn.com/w320/ky.png',
    },
    {
      name: 'United Arab Emirates',
      imageUrl: 'https://flagcdn.com/w320/ae.png',
    },
    {
      name: 'Switzerland',
      imageUrl: 'https://flagcdn.com/w320/ch.png',
    },
    {
      name: 'Bahamas',
      imageUrl: 'https://flagcdn.com/w320/bs.png',
    },
    {
      name: 'Iceland',
      imageUrl: 'https://flagcdn.com/w320/is.png',
    },
    {
      name: 'Malta',
      imageUrl: 'https://flagcdn.com/w320/mt.png',
    },
    {
      name: 'Ireland',
      imageUrl: 'https://flagcdn.com/w320/ie.png',
    },
    {
      name: 'Luxembourg',
      imageUrl: 'https://flagcdn.com/w320/lu.png',
    },
    {
      name: 'Singapore',
      imageUrl: 'https://flagcdn.com/w320/sg.png',
    },
    {
      name: 'Netherlands',
      imageUrl: 'https://flagcdn.com/w320/nl.png',
    },
  ];

  const nbArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= mvd.length; i++) {
    const randomNb = Math.floor(Math.random() * mvd.length);
    if (!nbArray.includes(randomNb)) nbArray.push(randomNb);
    if (nbArray.length === 5) break;
  }

  return (
    <div id="mvdBloc" className="flex flex-col items-center mvd">
      <div id="titleMvd">
        <h3 className="text-center mt-6 text-xl">Most Valued Destinations</h3>
      </div>

      {nbArray.map((index) => (
        <span
          id="countrySpan"
          className="w-4/5 sm:w-1/3 md:w-2/4 lg:w-3/12 mt-2 bg-dark-sienna text-white shadow-2xl rounded-full p-3"
        >
          <a href={`/destination/${mvd[index].name.toLowerCase()}`} id="link">
            <div className="flex items-center space-x-4">
              <div>
                <img
                  className="h-8 w-8 rounded-full"
                  src={mvd[index].imageUrl}
                  alt="flag"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-melon-pink">
                  {mvd[index].name}
                </p>
              </div>
            </div>
          </a>
        </span>
      ))}
    </div>
  );
}
