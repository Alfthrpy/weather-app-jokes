// app/components/SearchBar.tsx

'use client'; // Directive to specify client-side rendering

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim()); // Pass the query to the parent component
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter city name"
        className="border border-gray-300 p-2 rounded-l"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
