import { useState } from 'react';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import Button from './ui/Button';

interface CodeOutputProps {
  cssCode: string;
  tailwindClass: string;
}

const CodeOutput = ({ cssCode, tailwindClass }: CodeOutputProps) => {
  const [activeTab, setActiveTab] = useState<'css' | 'tailwind'>('css');
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedTailwind, setCopiedTailwind] = useState(false);

  const handleCopyCSS = () => {
    navigator.clipboard.writeText(cssCode);
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  const handleCopyTailwind = () => {
    navigator.clipboard.writeText(tailwindClass);
    setCopiedTailwind(true);
    setTimeout(() => setCopiedTailwind(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('css')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === 'css'
              ? 'bg-indigo-600 text-white'
              : 'bg-black/40 text-gray-300 hover:bg-black/60'
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab('tailwind')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === 'tailwind'
              ? 'bg-indigo-600 text-white'
              : 'bg-black/40 text-gray-300 hover:bg-black/60'
          }`}
        >
          Tailwind CSS
        </button>
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4 bg-black/40 border border-white/10 rounded-lg p-5">
          <pre className="flex overflow-x-auto font-mono text-base leading-relaxed text-gray-300 min-h-[50px]">
            <code>{activeTab === 'css' ? cssCode : tailwindClass}</code>
          </pre>
          <div className="flex-shrink-0">
            <Button
              onClick={activeTab === 'css' ? handleCopyCSS : handleCopyTailwind}
              variant="ghost"
              size="sm"
              className="whitespace-nowrap"
            >
              {activeTab === 'css' ? (
                copiedCSS ? (
                  <><CheckIcon className="h-4 w-4 mr-2" /> Copied!</>
                ) : (
                  <><ClipboardIcon className="h-4 w-4 mr-2" /> Copy</>
                )
              ) : copiedTailwind ? (
                <><CheckIcon className="h-4 w-4 mr-2" /> Copied!</>
              ) : (
                <><ClipboardIcon className="h-4 w-4 mr-2" /> Copy</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOutput;