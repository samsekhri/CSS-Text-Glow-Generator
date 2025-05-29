export function generateCssCode(blurRadius: number, opacity: number, color: string): string {
  // Convert hex to rgb
  const rgb = hexToRgb(color);
  
  if (!rgb) return '';
  
  return `text-shadow: 0px 0px ${blurRadius}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity});`;
}

export function generateTailwindClass(blurRadius: number, opacity: number, color: string): string {
  // Convert hex to rgb
  const rgb = hexToRgb(color);
  
  if (!rgb) return '';
  
  return `drop-shadow-[0px_0px_${blurRadius}px_rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})]`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove the # if it exists
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Check if the values are valid
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null;
  }
  
  return { r, g, b };
}