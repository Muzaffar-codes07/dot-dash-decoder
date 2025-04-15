
import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-muted">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-morse-gold" />
            <h1 className="text-2xl font-bold tracking-tight">Morse Code Translator</h1>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            .-.. --- ...- . .-.. -.--
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
