import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { changeMode } from '../store/ThemeSlice';

export default function ThemeChange(){
    const mode = useSelector(state => state.theme.mode);
    const dispatch = useDispatch();

    return(
        <button 
        onClick={ () => dispatch(changeMode())}
        className={`absolute top-3 right-3 m-3 p-2 rounded-lg justify-right hover:bg-black hover:text-white transition-transform duration-200 hover:scale-105
        ${mode === 'dark' ? 'bg-transparent text-white hover:bg-white' : 'bg-transparent text-black'}`}
        >
            {mode === 'light' ? '🌙' : '☀️'} 
        </button>
    );
};