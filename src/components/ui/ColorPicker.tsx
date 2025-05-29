import React from 'react';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ label, color, onChange }: ColorPickerProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-lg font-medium">{label}</label>
      <div className="flex gap-4 items-center">
        <div 
          className="w-10 h-10 rounded-lg border-2 border-white/20 overflow-hidden relative cursor-pointer"
          style={{ backgroundColor: color }}
        >
          <input
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 rounded bg-black/40 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default ColorPicker;