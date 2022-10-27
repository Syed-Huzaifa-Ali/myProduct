import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/product/productSlice';

const AddProduct = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { name: string, description: string } = {
      name: String(nameRef.current?.value),
      description: String(descriptionRef.current?.value)
    }
    dispatch(addProduct(data));
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
          <input type="text" placeholder="* Product name" name="name" ref={nameRef} required />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="* Product Description"
            style={{ resize: "none" }}
            ref={descriptionRef}
            required
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary my-1" value={"Add"} />

      </form>
    </div>
  );
}

export default AddProduct;