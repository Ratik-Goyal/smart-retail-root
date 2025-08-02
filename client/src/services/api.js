import axios from "axios";
const API = axios.create({baseURL: 'http://smart-retail-root.up.railway.app/api'});

export const getProducts = () => API.get('/products');
export const addProduct = (data) => API.post('/products', data);
export const deleteProduct = (id) => API.delete('/products/${id');