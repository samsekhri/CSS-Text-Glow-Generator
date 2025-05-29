import React from 'react';
import { HeartIcon, GithubIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 backdrop-blur-sm bg-black/20 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-400">
              Made with <HeartIcon className="inline-block h-4 w-4 text-pink-500" /> By Samanvay
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com/samsekhri" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/samanvay_sekhri" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Infino-Tools. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;