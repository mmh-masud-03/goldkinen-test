// components/PulseLoader.tsx
import React from "react";

const PulseLoader: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full animate-pulse bg-blue-500"></div>
    </div>
  );
};

export default PulseLoader;
