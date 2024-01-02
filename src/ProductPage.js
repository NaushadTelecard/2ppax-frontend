// src/Product.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductPageHeader from './components/product/ProductPageHeader';
import ProductPageProductSection from './components/product/ProductPageProductSection';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     // Fetch product data from the backend
  //     axios.get('YOUR_BACKEND_API_ENDPOINT')
  //       .then(response => {
  //         setProducts(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching product data:', error);
  //       });
  //   }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    // Dummy product data
    const dummyProducts = [
      { id: 1, name: 'Product Management Tool', price: 19.99, description: `Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...` },
      { id: 2, name: 'Inventory Management Product', price: 29.99, description: `Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...` },
      { id: 3, name: 'Hospital Management System', price: 39.99, description: `Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...` },
      // Add more dummy products as needed
    ];

    setProducts(dummyProducts);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <ProductPageHeader />
      <ProductPageProductSection products={products} />
    </>
  );
};

export default ProductPage;