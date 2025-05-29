import React, { useState, useEffect } from 'react';
import Slider from './ui/Slider';
import ColorPicker from './ui/ColorPicker';
import CodeOutput from './CodeOutput';
import TextPreview from './TextPreview';
import { generateCssCode, generateTailwindClass } from '../utils/glowUtils';

const TextGlowGenerator = () => {
  const [text, setText] = useState('Infino-Tools');
  const [blurRadius, setBlurRadius] = useState(20);
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState('#ffffff');
  const [cssCode, setCssCode] = useState('');
  const [tailwindClass, setTailwindClass] = useState('');

  const handleBlurRadiusChange = (value: number) => {
    setBlurRadius(Math.min(Math.max(value, 0), 50));
  };

  const handleOpacityChange = (value: number) => {
    setOpacity(Math.min(Math.max(value, 0), 1));
  };

  useEffect(() => {
    setCssCode(generateCssCode(blurRadius, opacity, color));
    setTailwindClass(generateTailwindClass(blurRadius, opacity, color));
  }, [text, blurRadius, opacity, color]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-10 text-center">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] animate-gradient-x"
     style={{
       backgroundImage: 'linear-gradient(270deg,#7303c0, #ec38bc, #fdeff9, #fdbb2d,  #b21f1f,  #ec38bc, #7303c0)',
       backgroundSize: '600% 600%',
     }}
>
  CSS Text Glow Generator
</h1>
  <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
    Create beautiful glowing text effects with ease. Adjust the parameters below and get the CSS code.
  </p>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <label htmlFor="text-input" className="block text-lg font-medium">
              Text
            </label>
            <input
              id="text-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all duration-200"
              placeholder="Enter your text here"
            />
          </div>

          <Slider
            label="Blur Radius"
            value={blurRadius}
            onChange={handleBlurRadiusChange}
            min={0}
            max={50}
            step={1}
            unit="px"
          />

          <Slider
            label="Opacity"
            value={opacity}
            onChange={handleOpacityChange}
            min={0}
            max={1}
            step={0.01}
          />

          <ColorPicker
            label="Glow Color"
            color={color}
            onChange={setColor}
          />
        </div>

        <div className="space-y-8">
          <TextPreview 
            text={text || 'Infino-Tools'} 
            blurRadius={blurRadius} 
            opacity={opacity} 
            color={color} 
          />
          <CodeOutput 
            cssCode={cssCode} 
            tailwindClass={tailwindClass} 
          />
        </div>
      </div>

      <div className="mt-16 bg-black/40 border border-white/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">How to use this CSS text glow effect</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Follow these simple steps to add a beautiful glow effect to your text:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Enter your desired text in the input field above</li>
            <li>Adjust the blur radius, opacity, and color to your liking</li>
            <li>Copy either the CSS code or Tailwind class</li>
            <li>Paste the code into your project and apply it to your text elements</li>
          </ol>
          <p className="mt-4">
            The text-shadow property adds a shadow effect to text, creating the glow effect.
            By adjusting the blur radius and color, you can create various glowing effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextGlowGenerator;