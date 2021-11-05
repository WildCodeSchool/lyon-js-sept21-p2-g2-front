import React from 'react';

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
      name: 'USA',
      imageUrl: 'https://flagcdn.com/w320/us.png',
    },
    {
      name: 'Iceland',
      imageUrl: 'https://flagcdn.com/w320/is.png',
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div id="titleMvd">
        <h3 className="text-center mt-6 mb-2">Most Valued Destinations</h3>
      </div>

      {mvd.map((country) => (
        <span className="py-4 my-2 w-4/5 sm:w-1/3 md:w-1/4 mt-2 bg-dark-sienna text-white shadow-2xl rounded-3xl p-2">
          <a
            href={`http://localhost:3001/destination/${country.name}`}
            id="link"
          >
            <div className="flex items-center space-x-4">
              <div>
                <img
                  className="h-8 w-8 rounded-full"
                  src={country.imageUrl}
                  alt="flag"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-melon-pink">
                  {country.name}
                </p>
              </div>
            </div>
          </a>
        </span>
      ))}
    </div>
  );
}
