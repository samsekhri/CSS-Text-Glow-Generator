import React from 'react';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

const Slider = ({ label, value, onChange, min, max, step, unit }: SliderProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      onChange(Math.min(Math.max(newValue, min), max));
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block text-lg font-medium">{label}</label>
        <div className="flex items-center">
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            min={min}
            max={max}
            step={step}
            className="w-20 px-2 py-1 rounded bg-black/40 border border-white/10 text-center focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all duration-200"
          />
          {unit && <span className="ml-1 text-gray-400">{unit}</span>}
        </div>
      </div>
      
      <div className="relative">
        <div className="h-2 rounded-full bg-black/40">
          <div 
            className="absolute h-2 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" 
            style={{ width: `${percentage}%` }} 
          />
        </div>
        <input
          type="range"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          step={step}
          className="absolute w-full h-2 top-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Slider;