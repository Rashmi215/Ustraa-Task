import React, {Component} from 'react';
import Product from './Product';
import Loader from 'react-loader-spinner';

class Default extends Component{
  state = {
    products: [],
    error: null,
    isLoading: true
  };

  componentDidMount(){
    fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=190`)
    .then(res => res.json())
    .then(data =>{
       this.setState({
         products: data.products,
         isLoading: false
       })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  };

  render(){
    const {isLoading, products} = this.state;
    return(
      <div>
        {isLoading ? (
          <div style={{marginLeft: '45%', marginTop: '15%'}}>
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

export default Default;