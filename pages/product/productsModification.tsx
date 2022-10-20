import React, { Fragment } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProduct, deleteProduct } from '../../features/product/productSlice';
import ProductsTable from './productsTable';

const ProductModification: React.FC = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProduct);

  return (<Fragment>
    <div className='container'>
      <h1 className="large text-primary">
        Product Modification
      </h1>
      <p className="lead">
        Add, Update and Delete any product that you like along with it's description
      </p>
      <div className="dash-buttons">
        <span className="btn btn-light"><Link href="/product/addProduct">Add Product</Link></span>
      </div>
      <ProductsTable products={products} deleteProduct={deleteProduct} dispatch={dispatch} />
    </div>
  </Fragment>);
}

export default ProductModification;