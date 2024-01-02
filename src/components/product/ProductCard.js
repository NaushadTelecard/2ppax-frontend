// src/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className={`bg-[#FAF4F3] p-10 shadow-md ${ (product.id% 2 === 0) ? 'border border-2 border-dashed border-[#942D3B]' : ''}`}>
      <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
      <p className="text-gray-800">{product.description}</p>
      <div className=' border-b border-gray-200 pb-5'></div>
      <div class="px-4 py-3 sm:flex justify-between sm:px-6">
        <p className="text-gray-600 mb-2">${product.price}</p>
        <p className="text-gray-600 mb-2">${product.price}</p>
      </div>
      <div class="px-4 py-3 sm:flex justify-center sm:px-6">
        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Show Details</button>
      </div>
    </div>

  );
};

export default ProductCard;