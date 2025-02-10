import React from 'react';

const GradientBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-yellow-50 to-pink-100">
      {/* Add a subtle blur effect overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
    </div>
  );
};

export default GradientBackground;