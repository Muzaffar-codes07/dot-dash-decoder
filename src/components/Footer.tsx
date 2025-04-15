
import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-8 border-t border-muted">
      <div className="container max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Morse Code Translator. Learn the language of telegraphs.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Guide
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              History
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
