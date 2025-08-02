import React, { use, useState } from 'react';
import { addProduct } from '../services/api';

export default function ProductForm({refresh}) {
    const[form, setForm] = useState({name: '', quantity: '', price: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(form);
        refresh();
        setForm({name: '', quantity: '', price: ''});
    };

    return (
        <form onSubmit = {handleSubmit}>
        <input placeholder= "Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value})} />
        <input placeholder= "Qty" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value})} />
        <input placeholder= "Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value})} />
        <button type = "Submit">Add</button>
        </form>
    )
}