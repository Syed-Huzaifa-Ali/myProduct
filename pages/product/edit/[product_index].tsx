import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { editProduct, selectProduct } from '../../../features/product/productSlice';

const EditProduct: React.FC = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProduct);

  const router = useRouter();
  const { product_index } = router.query;
  const product = products[Number(product_index)];

  const [formData, setFormData] = useState({
    name: product?.name,
    description: product?.description
  });

  const { name, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const data: { index: number, name: string, description: string } = { index: Number(product_index), name, description }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(editProduct(data));
    router.push('/product/productsModification');
  }

  return (
    <div className='container'>
      <h1 className="large text-primary">
        Edit a product
      </h1>
      <p className="lead">
        Edit any product that you like along with it's description
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* Product name" name="name" value={name} onChange={e => onChange(e)} required />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="* Product Description"
            style={{ resize: "none" }}
            value={description} onChange={e => onChange(e)}
            required
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary my-1" value={"Update"} />

      </form>
    </div>
  );
}

export default EditProduct;