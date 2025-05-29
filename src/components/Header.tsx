import React from 'react';
import { SparklesIcon, StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <SparklesIcon className="h-6 w-6 text-indigo-400" />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Infino-Tools
            </h1>
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
  <Link 
    to="/tools" 
    className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
  >
    Tools
  </Link>
</li>

            <li>
              <Link
                to="/docs"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                Docs
              </Link>
            </li>
          </ul>

          {/* 🌟 GitHub Button */}
          <a
            href="https://github.com/samsekhri/CSS-Text-Glow-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] hover:shadow-purple-400 transition-all duration-300"
          >
            <StarIcon className="w-5 h-5 animate-pulse" />
            Star on GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
