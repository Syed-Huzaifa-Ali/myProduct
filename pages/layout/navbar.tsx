import React from 'react';
import Link from 'next/link';

const Navbar:React.FC = () => {

    const Links = (
        <ul>
           <li><Link href='/'><a className="fas fa-users">Home</a></Link></li>
           <li><Link href='/product/productsModification'><a className="fas fa-users">Products Modification</a></Link></li>
           <li><Link href='/product/productsList'><a className="fas fa-users">List</a></Link></li>
        </ul>
    );

    return (
        <div>
            <nav className="navbar bg-dark">
                <h1><Link href='/'><a className="fas fa-users">Products</a></Link></h1>
                {Links}
            </nav>
        </div>
    )
};

export default Navbar;