import { Fragment } from 'react';
import Link from 'next/link';

type Props = {
    products: Array<{ name: string, description: string }>;
    deleteProduct: (e: any) => void;
    dispatch: (e: any) => void;
};

const ProductTable = ({ products, deleteProduct, dispatch }: Props) => {

    const prod = products && products.map((product, index) => (
        <tr key={index}>
            <td>{product.name}</td>
            <td className="hide-sm">{product.description}</td>
            <td><span className="btn btn-primary"><Link href={`/product/edit/${index}`}><span style={{ color: 'white' }}>Edit</span></Link></span></td>
            <td><button onClick={() => dispatch(deleteProduct({ index }))} className="btn btn-danger">Delete</button></td>
        </tr>
    ));


    return (
        <Fragment>
            <h2 className="my-2">Products</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="hide-sm">Description</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {prod}
                </tbody>
            </table>
        </Fragment>
    )
};

export default ProductTable;
