import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-indigo-950 z-0" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Glowing orbs for aesthetic */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-[128px] opacity-15" />
    </div>
  );
};

export default Background;