import React from 'react';
import axios from "axios";
import Product from '../product.js';

export default class Api extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        products:[]
      }
    }

  componentDidMount() {
    axios.get('https://5dd14f8d15bbc2001448d07d.mockapi.io/products')
    .then(response =>{       
        console.log(response.data);
        this.setState({products: response.data});
    });

    // axios.delete('https://5dd14f8d15bbc2001448d07d.mockapi.io/products/16')
    // .then((data) => {
    //   console.log(data);
    // })

    // axios.post('https://5dd14f8d15bbc2001448d07d.mockapi.io/products',
    // {"id":"201","createdAt":"at night","name":"good night","avatar":"test"})
  }

  render () {
    const products = this.state.products.map(product => {
      return <Product key={product.id} name = {product.name} avatar = {product.avatar}/>
    });

    // const { product } = this.state;
    return (
      <div>
        {products}
        {/* <Product name = "hello" />   */}
        {/* {product && (
          <>
            <h4>{product.name}</h4>
            <img src = {product.avatar} alt = {product.name} />
          </>
        )}        */}
      </div>
    );
  }
}