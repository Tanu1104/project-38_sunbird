import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="py-48 px-6 lg:px-20 text-white text-center"
      style={{
        backgroundImage: 'url(/products/headphones/headphones.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black/50 p-8 rounded-lg inline-block">
        <h1 className="text-5xl font-black italic mb-4">Experience Sound Like Never Before</h1>
        <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
          Our new collection of audio devices is engineered to deliver the purest sound.
        </p>
        <button className="bg-cyan-500 text-white font-bold uppercase px-8 py-4 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
