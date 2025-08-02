import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', quantity: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://smart-retail-root.up.railway.app/api/products');
    setProducts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://smart-retail-root.up.railway.app/api/products', form);
    setForm({ name: '', price: '', quantity: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://smart-retail-root.up.railway.app/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>SmartRetail Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          placeholder="Quantity"
          type="number"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ₹{product.price} ({product.quantity})
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;