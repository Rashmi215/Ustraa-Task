import React, { Component } from 'react';
import Product from './Product';
import Loader from 'react-loader-spinner';

class ProductList extends Component{
  state = {
    products: [],
    isLoading: true,
    error: null
  };

  getProducts = id => {
  this.setState({isLoading: true});
  fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${id}`)
  .then(res => res.json())
  .then(data =>{
     this.setState({
       products: data.products,
       isLoading: false
     })
  })
  .catch(error => this.setState({ error, isLoading: false }));
 }

  componentDidMount(){
    this.getProducts(this.props.match.params.id);
  }

  render(){
    const {isLoading, products} = this.state;
    return(
      <div className='container-fluid'>
        {isLoading ? (
          <div style={{marginLeft: '45%', marginTop: '15%'}} className='container'>
           <Loader
            type='Bars'
            color='#00BFFF'
            height='80'
            width='80'/>
          </div>
        ) : (<Product products={products} />)}
      </div>
    );
  }
}

export default ProductList;