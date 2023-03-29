import React, {useEffect} from 'react';
import {useTelegram} from "./Hooks/useTelegram.jsx";
const tg = window.Telegram.WebApp
const App = () => {
const {onToggleButton,tg} = useTelegram()
    useEffect(() => {
            tg.ready()
    }, [])


    return (
        <div className="App">
           <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
};

export default App;