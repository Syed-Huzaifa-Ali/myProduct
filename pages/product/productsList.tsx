import { useAppSelector } from '../../app/hooks';
import { selectProduct } from '../../features/product/productSlice';
import styles from '../../styles/productsList.module.css';
import Link from 'next/link';

const ProductsList = () => {

  const products = useAppSelector(selectProduct);

  return (
    <div className='container' style={{ alignContent: 'center' }}>
      <h1 className="large text-primary">
        Products List
      </h1>
      <p className="lead">
        Click any product that you like for it&apos;s description
      </p>

      <div className={styles.grid}>
        {products.map((product, index) => {
          return <Link key={index} href={`/product/details/${index}`}>
            <a className={styles.card}>
              <h2>{product.name} &rarr;</h2>
            </a>
          </Link>
        })
        }
      </div>
    </div>
  );
};

export default ProductsList;