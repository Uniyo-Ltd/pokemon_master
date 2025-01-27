// src/components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
 onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
 const [searchTerm, setSearchTerm] = useState('');

 const handleSearch = () => {
    onSearch(searchTerm);
 };

 return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a Pokémon..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
 );
};

export default SearchBar;