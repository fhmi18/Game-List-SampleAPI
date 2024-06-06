import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import GameList from './components/gameList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="mb-2.5 mt-0 text-5xl font-medium leading-tight text-center">Game</div>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <GameList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
