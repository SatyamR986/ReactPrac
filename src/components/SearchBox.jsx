import React, { useState, useEffect } from "react";
import '../index.css';

function SearchBox({ onLiveSearch, onCommitSearch }) {
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
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 items-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter City name..."
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-white"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="px-4 py-2 bg-gray-300 text-black border-1 rounded hover:bg-transparent hover:text-white"
      >
        Search!
      </button>
    </form>
  );
}

export default SearchBox;
