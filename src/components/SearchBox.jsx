import React, {useState} from "react";
import '../index.css';

function SearchBox({onSearch}){
    const [input, setInput] = useState('');

    // handlesubmit function , event triggered -> prevent default reload , check if input trim and set input
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
            setInput('');
        }
    };

    return(

     // form runs handlesubmit when submitted 
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-4">
        <input
        type="text"
        value={input}   
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-300"
        onChange={(e) => setInput(e.target.value)} // takes latest input as e.target.value and stores it in state.
        placeholder="Enter City name ..."
        />
            <button type="submit"
                className="px-4 py-2 bg-transparent text-white rounded border-1 border-gray-300 hover:bg-gray-500 hover:text-black transition">
                Search!
                
            </button>
    </form>
    );
}

export default SearchBox;