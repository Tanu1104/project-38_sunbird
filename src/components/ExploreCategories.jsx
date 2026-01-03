import React, { useState } from "react";
import { categories } from "../data/categories";

const CategoryCard = ({ cat, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="text-center group cursor-pointer animate-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <div className="image-inner aspect-[3/4] overflow-hidden rounded-xl flex items-center justify-center">
          <img
            src={cat.icon}
            alt={cat.name}
            className="w-full h-full object-cover card-hover transition-transform duration-500"
          />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 bg-white/10 backdrop-blur-md p-2 rounded-full 
                     opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? "#44d62c" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isLiked ? "#44d62c" : "white"}
            className="w-5 h-5 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      <h4 className="mt-4 text-lg font-bold uppercase tracking-widest group-hover:text-[#44d62c] transition-colors">
        {cat.name}
      </h4>
    </div>
  );
};

export default function ExploreCategories() {
  const [showAll, setShowAll] = useState(false);
  
  const filteredCategories = categories.filter(
    (cat) => cat.section === "explore"
  );

  // Determine which items to show: first 4 or all of them
  const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 4);

  return (
    <section className="section py-24 bg-[#011222]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-subtitle text-center">Discover the Collection</p>
        <h2 className="section-title text-center text-white italic uppercase">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleCategories.map((cat, index) => (
            <CategoryCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        {/* Conditional "View All" / "View Less" Button */}
        {filteredCategories.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-3 bg-transparent border border-[#44d62c] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(68,214,44,0.4)]"
            >
              <span className="relative z-10 text-[#44d62c] font-bold uppercase tracking-widest text-sm group-hover:text-black transition-colors duration-300">
                {showAll ? "View Less" : "View All Categories"}
              </span>
              <div 
                className={`absolute inset-0 bg-[#44d62c] transition-transform duration-300 origin-left ${
                  showAll ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}