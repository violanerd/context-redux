import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import {useSelector, useDispatch } from 'react-redux'
import {updateProducts} from '../../features/products/productSlice'

function ProductList() {
 // const [state1, dispatch1] = useStoreContext();
  const currentCategory = useSelector((state) => state.categorySlice.currentCategory)
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  // implement redux here
  
  const dispatch = useDispatch()
  console.log("data", data)
  
  useEffect(() => {
    if (data){
      dispatch(updateProducts(data.products))
    
    data.products.forEach((product) => {
            idbPromise('products', 'put', product);
          });
        } else if (!loading) {
          idbPromise('products', 'get').then((products) => {
            dispatch(updateProducts((products))
          )})
        }  
  }, [data, loading, dispatch])

  function filterProducts() {
    if (!currentCategory) {
      return newProducts;
    }

    return newProducts.filter(
      (product) => product.category._id === currentCategory
    );
  }
  const newProducts = useSelector((state) => state.productSlice.products)
  console.log("newProducts", newProducts)
  return (
    <div className="my-2">TEST
      <h2>Our Products:</h2>
      {newProducts.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
