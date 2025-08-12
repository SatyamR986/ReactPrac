import React, { useState, useEffect } from "react";
import '../index.css';
import { useSelector } from 'react-redux';
import searchW from '../assets/search2.png'
import searchB from '../assets/search1.png'



function SearchBox({ onLiveSearch, onCommitSearch }) {
  const mode = useSelector(state => state.theme.mode);
  const [input, setInput] = useState('');

  // Debounced live search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        onLiveSearch(input.trim());
      } else {
        onLiveSearch(null); // Clear live preview
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input, onLiveSearch]);

  const handleSearch = () => {
    if (input.trim()) {
      onCommitSearch(input.trim());
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2 justify-center items-center mb-4 ">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter City name..."
        className={`p-2 rounded border border-black focus:outline-none focus:ring-2 focus:ring-black-400 text-black transition-transform duration-200 hover:scale-105
           ${mode === 'dark' ? 'border-white text-white' : 'text-black'}`}
      />
      <button
        type="button"
        onClick={handleSearch}
        className={`px-4 py-2  text-black border-1 rounded hover:bg-transparent shadow-lg transition-transform duration-200 hover:scale-105
          ${mode === 'dark' ? 'border-white text-white' : 'text-black'}`}
      >
        <img
          src={mode === 'dark' ? searchW : searchB}
          alt="Search icon"
          className="w-5 h-5"
        />
      </button>
    </form>
  );
}

export default SearchBox;
