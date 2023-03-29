import React, {useEffect} from 'react';
import {useTelegram} from "./Hooks/useTelegram.jsx";
import Header from "./Header/Header.jsx";
import Button from "./Button/Button.jsx";
const App = () => {
const {onToggleButton,tg} = useTelegram()
    useEffect(() => {
            tg.ready()
    }, [])


    return (
        <div className="App">
            <Header />
           <Button onClick={onToggleButton}>Toggle</Button>
        </div>
    );
};

export default App;