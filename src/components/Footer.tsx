
import React from 'react';
import { Github, Terminal, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-8 border-t border-morse-hacker-dimGreen bg-morse-hacker-bg/50 backdrop-blur-sm">
      <div className="container max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-morse-hacker-dimGreen">
            <p className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              SECURE TRANSMISSION CHANNEL / / / {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Shield className="h-4 w-4 text-morse-hacker-dimGreen" />
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-morse-hacker-dimGreen hover:text-morse-hacker-green transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>SOURCE::ACCESS</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
