import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ShopTheLatest = () => {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="text-left mb-16">
        <h3 className="text-4xl font-black italic mb-4">
          Shop the Latest
        </h3>
        <p className="text-lg text-zinc-400">
          Explore our newest collection of cutting-edge audio devices, designed for premium sound and comfort. Our latest range of products combines sleek design with powerful performance, ensuring an unparalleled audio experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShopTheLatest;
