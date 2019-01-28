import React from 'react';

const Product = (props) =>{
  const {products} = props;
  return(
   <div className='mt-5 px-2'>
      {products.map(product =>{
        return(
          <div className="media p-3 bg-white" key={product.id}>
            <img src={product.image_urls["x300"]} alt="img" className="mr-5 mt-1 ml-4" style={{width:180}}/>
            <div className="media-body mt-1">
              <a href= '/' style={{color:'black'}}>
                <h5>
                  { product.name }
                  <h6 style={{color: 'grey', float: 'right'}}>
                    {product.rating} { product.rating  && <i className="fas fa-star fa-xs"/> }
                  </h6>
                </h5>
                <p>({ product.weight} {product.weight_unit})</p>
              </a>
              <span><strong>₹ {product.final_price}</strong> <del>{product.price}</del></span>
              <br /><br />
              {product.is_in_stock ?
                (
                  <button
                  className ='btn btn-md btnClass'
                  type='button'
                  style={{background:'#4FCF64'}}>
                    <span style={{fontSize: '0.9em'}}>ADD TO CART</span>
                  </button>
                ):
                (
                  <button
                   className ='btn btn-md disabled btnClass'
                   type='button'
                   style={{background:'grey'}}>
                     <span style={{fontSize: '0.9em'}}>OUT OF STOCK</span>
                  </button>
                )
              }
            </div>
          </div>
        )
      })}
   </div>
 );
}

export default Product;