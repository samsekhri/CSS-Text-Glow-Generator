
interface TextPreviewProps {
  text: string;
  blurRadius: number;
  opacity: number;
  color: string;
}

const TextPreview = ({ text, blurRadius, opacity, color }: TextPreviewProps) => {
  const rgba = hexToRgba(color, opacity);
  
  const previewStyle = {
    textShadow: `0px 0px ${blurRadius}px ${rgba}`,
  };

  return (
    <div className="relative overflow-hidden rounded-lg backdrop-blur-sm bg-black/40 border border-white/10 p-8 flex items-center justify-center min-h-[200px]">
      <h2 className="text-4xl sm:text-5xl font-bold" style={previewStyle}>
        {text || 'Infino-Tools'}
      </h2>
    </div>
  );
};

// Helper function to convert hex to rgba
function hexToRgba(hex: string, opacity: number): string {
  // Remove the # if it exists
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Return the rgba string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default TextPreview;