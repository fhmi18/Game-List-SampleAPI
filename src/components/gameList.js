import React, { useState, useEffect } from 'react';

const GameList = ({ searchTerm }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/switch/games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
    {filteredGames.map(game => (
      <div key={game.id} className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10 mb-4 mt-4">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full  transition-all duration-300 group-hover:bg-sky-400">
            <svg className="w-[50px] h-[50px] fill-[#110303] group-hover:fill-white" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"></path>
            </svg>
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-sky-500 transition-all duration-300 group-hover:text-black/90">
            <h2 className="text-xl font-bold">{game.name}</h2>
            <p>Genre: {game.genre.join(', ')}</p>
            <p>Developers: {game.developers.join(', ')}</p>
            <p>Publishers: {game.publishers.join(', ')}</p>
            <p>Release Dates:</p>
            <ul>
              {Object.entries(game.releaseDates).map(([region, date]) => (
                <li key={region}>
                  {region}: {date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default GameList;
