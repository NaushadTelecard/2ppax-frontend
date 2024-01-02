// src/ProductCard.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductPageProductSection = ({ products }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className=" max-w-2xl mx-auto text-center">
        {/* <div className="mx-auto max-w-2xl lg:mx-0"> */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">VIEW OUR PRODUCTS</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum has been the industry's standard. dummy text ever </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProductPageProductSection;