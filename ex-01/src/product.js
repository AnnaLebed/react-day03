import React from 'react';

const Product = (props) => {
    return(
        <div className = "product-card shadow-sm">
            <h2>{props.name}</h2>
            <img src = {props.avatar}/ >
        </div>);
}

export default Product;


