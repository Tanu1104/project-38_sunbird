import React from 'react';

const ProductCard = ({ product, showButtons }) => {
  return (
    <div className="text-center group cursor-pointer product-card-container">
      <div className="relative">
        <div className="image-inner aspect-square rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        {showButtons && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-row items-end justify-center gap-4 pb-4 rounded-xl">
            <button className="bg-white text-black font-bold text-xs uppercase px-4 py-2 rounded">Buy Now</button>
            <button className="bg-cyan-500 text-white font-bold text-xs uppercase px-4 py-2 rounded">Add to Cart</button>
          </div>
        )}
      </div>

      <h4 className="mt-4 text-lg font-bold">{product.name}</h4>
      <p className="font-bold">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
