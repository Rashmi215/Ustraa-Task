import React, {Component} from 'react';
import '../styles/Product.css';

class Product extends Component{
  state = {
     winWidth: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
   };

   handleWindowSizeChange = () => {
      this.setState({ winWidth: window.innerWidth });
    };

  render(){
    const {products} = this.props;
    const {winWidth} = this.state;
    return(
     <div className='rootProduct'>
     <div className='mt-5 px-2'>
        {products.map(product =>{
          return(
            <div className='container-fluid' key={product.id}>

            <div className="media p-3 bg-white row">

               {/* Product Image*/}
            {((winWidth < 1024) && (winWidth > 768)) ?
            (<img id = 'productImage' src={product.image_urls["x300"]} alt="img" className="mr-5 mt-1" style={{width:'180'}}/>) :
            ((winWidth < 768)&&(winWidth > 480) ?
            (<img id = 'productImage' src={product.image_urls["x240"]} alt="img" className="mr-5 mt-1" style={{width:'180'}}/>) :
            (<img id = 'productImage' src={product.image_urls["x120"]} alt="img" className="mr-5 mt-1" style={{width:'180'}}/>)) }


                {/*Product body*/}
              <div className="media-body mt-1" id='two'>
                <a href= '/' style={{color:'black'}}>
                  <h5 id='productName'>
                    { product.name }
                    <h6 style={{color: 'grey', float: 'right'}} id='productRating'>
                      {product.rating} { product.rating  && <i className="fas fa-star fa-xs"/> }
                    </h6>
                  </h5>
                  <p id='productDesc'>({ product.weight} {product.weight_unit})</p>
                </a>
                <span id='productPrice'><strong>₹ {product.final_price}</strong> <del>{product.price}</del></span>
                <br /><br />
                {product.is_in_stock ?
                  (
                    <button
                    className ='btn btn-md btnClass'
                    type='button'
                    style={{background:'#4FCF64'}}
                    id='addButton'>
                      <span style={{fontSize: '0.9em'}} id='addSpan'>ADD TO CART</span>
                    </button>
                  ):
                  (
                    <button
                     className ='btn btn-md disabled btnClass'
                     type='button'
                     style={{background:'grey'}}
                     id='outButton'>
                       <span style={{fontSize: '0.9em'}} id='outSpan'>OUT OF STOCK</span>
                    </button>
                  )
                }
              </div>
             </div>
            </div>
          )
        })}
       </div>
      </div>

   );
  }

}

export default Product;