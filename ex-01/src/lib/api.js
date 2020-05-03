import React from 'react';
import axios from "axios";

export default class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
          products:null
        }
    }

  componentDidMount() {
    axios.get('https://5dd14f8d15bbc2001448d07d.mockapi.io/products')
    .then(response =>{       
        console.log(response.data);
    });

    axios.delete('https://5dd14f8d15bbc2001448d07d.mockapi.io/products/16')
    .then((data) => {
      console.log(data);
    })

    axios.post('https://5dd14f8d15bbc2001448d07d.mockapi.io/products',
    {"id":"201","createdAt":"at night","name":"good night","avatar":"test"})
  }

  render () {
    return (
      <div>
       
      </div>
    );
  }
}