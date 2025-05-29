import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 flex items-center gap-2">
          📘 <span>CSS Text Glow Generator Documentation</span>
        </h1>

        {/* What is this tool? */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            🛠️ What is this tool?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The CSS Text Glow Generator is a web-based tool that helps you visually create glowing text effects with custom blur, opacity, and color. It outputs production-ready CSS or Tailwind CSS code that you can copy and paste directly into your web projects, saving development time and ensuring consistency.
          </p>
        </section>

        {/* How to Use */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            📋 How to use
          </h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Enter the text you want to glow in the input field.</li>
            <li>Adjust the blur radius, opacity, and color using the sliders and color picker.</li>
            <li>Choose whether you want raw CSS or Tailwind CSS output.</li>
            <li>Click the “Copy” button to copy the generated code to your clipboard.</li>
            <li>Paste it into your HTML, React, or Tailwind-based project.</li>
          </ol>
        </section>

        {/* Output Example */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            💡 Example Output
          </h2>
          <div className="bg-gray-900 rounded-md p-4 text-green-400 font-mono text-sm overflow-x-auto">
            drop-shadow-[0px_0px_32px_rgba(255,255,255,1)]
          </div>
          <p className="text-sm text-gray-400 mt-2">
            This Tailwind class adds a white glow with 32px blur.
          </p>
        </section>

        {/* Use Cases */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            📁 Use Cases
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Hero text on landing pages</li>
            <li>Futuristic or cyberpunk UIs</li>
            <li>Game interfaces or dark-themed dashboards</li>
            <li>Neon-themed product pages or banners</li>
            <li>Portfolio headers with standout visuals</li>
          </ul>
        </section>

        {/* Additional Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            🚀 Tips & Best Practices
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Use glow effects sparingly to maintain visual focus and reduce clutter.</li>
            <li>Pair glowing text with dark backgrounds for maximum contrast.</li>
            <li>Combine glow with subtle animations (like fade or pulse) for dynamic UI.</li>
            <li>Preview across devices to ensure readability and accessibility.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12">
          Made with ❤️ by <span className="text-pink-400 font-semibold">Samanvay</span> · Part of <span className="text-purple-400 font-semibold">Infino-Tools</span>
        </footer>
      </div>
    </div>
  );
};

export default Documentation;
