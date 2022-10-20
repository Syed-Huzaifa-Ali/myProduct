import { useRouter } from 'next/router';
import { useAppSelector } from '../../../app/hooks';
import { selectProduct } from '../../../features/product/productSlice';

const ProductsList = () => {

  const products = useAppSelector(selectProduct);

  const router = useRouter()
  const { product_index } = router.query

  const product = products[Number(product_index)];

  return (
    <div className='container' style={{ alignContent: 'center' }}>
      <h1 className="large text-primary">
        {product?.name}
      </h1>
      <p className="lead justified">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductsList;