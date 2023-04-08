import React from 'react';
import './ProductList.css'
import {Link} from "react-router-dom";

const ProductList = () => {
    return (
        <div>
            <Link to={'/form'}>Link</Link>
            Product list
        </div>
    );
};

export default ProductList;