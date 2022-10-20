import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/product/productSlice';

const AddProduct = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const { name, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({ name: '', description: '' });
    router.push('/product/ProductsModification');
  }

  return (
    <div className='container'>
      <h1 className="large text-primary">
        Add a product
      </h1>
      <p className="lead">
        Add any product that you like along with it&apos;s description
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

        <input type="submit" className="btn btn-primary my-1" value={"Add"} />

      </form>
    </div>
  );
}

export default AddProduct;