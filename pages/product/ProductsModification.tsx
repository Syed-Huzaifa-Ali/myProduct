import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProduct, deleteProduct } from '../../features/product/productSlice';
import ProductsTable from './ProductsTable';

const ProductModification = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProduct);

  return (
    <div className='container'>
      <h1 className="large text-primary">
        Product Modification
      </h1>
      <p className="lead">
        Add, Update and Delete any product that you like along with it&apos;s description
      </p>
      <div className="dash-buttons">
        <span className="btn btn-light"><Link href="/product/AddProduct">Add Product</Link></span>
      </div>
      <ProductsTable products={products} deleteProduct={deleteProduct} dispatch={dispatch} />
    </div>
  );
}

export default ProductModification;