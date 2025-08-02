import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/api';
import { applyDefaults } from '../../../server/models/Product';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    const loadData = async () => {
        const res = await getProducts();
        setProducts(res.data);
    };

    useEffect(() => { loadData(); }, []);
    return (
        <div>
            <h3>Inventory</h3>
            <ul>
                {products.map(p => (
                    <li key = {p._id}>
                        {pi.name} - Qty: {p.quantity}, ₹{p.price}
                        <button onClick={() => { deleteProduct(p._id); loadData(); }} >delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}