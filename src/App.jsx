import React, {useEffect} from 'react';
import {useTelegram} from "./Hooks/useTelegram.jsx";
import Header from "./Header/Header.jsx";
import {Link, Route, Routes} from "react-router-dom";
import ProductList from "./ProductList/ProductList.jsx";
import Form from "./Form/Form.jsx";
const App = () => {
const {onToggleButton,tg} = useTelegram()
    useEffect(() => {
            tg.ready()
    }, [])


    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index  element={<ProductList />}/>
                <Route path={'form'} element={<Form />} />
            </Routes>
        </div>
    );
};

export default App;