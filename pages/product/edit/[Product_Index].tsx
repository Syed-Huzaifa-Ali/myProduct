import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { editProduct, selectProduct } from '../../../features/product/productSlice';

const EditProduct = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProduct);

  const router = useRouter();
  const { Product_Index } = router.query;
  const product = products[Number(Product_Index)];

  const nameRef = useRef<HTMLInputElement>(product?.name);
  const descriptionRef = useRef<HTMLTextAreaElement>(product?.description);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { index: number, name: string, description: string } = { index: Number(Product_Index), name: nameRef.current.value, description: descriptionRef.current.value }
    dispatch(editProduct(data));
    router.push('/product/ProductsModification');
  }

  return (
    <div className='container'>
      <h1 className="large text-primary">
        Edit a product
      </h1>
      <p className="lead">
        Edit any product that you like along with it&apos;s description
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* Product name" name="name" defaultValue={String(nameRef.current)} ref={nameRef} required />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="* Product Description"
            style={{ resize: "none" }}
            defaultValue={String(descriptionRef.current)}
            ref={descriptionRef}
            required
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary my-1" value={"Update"} />

      </form>
    </div>
  );
}

export default EditProduct;