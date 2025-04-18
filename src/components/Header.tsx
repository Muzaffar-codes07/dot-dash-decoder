
import React from 'react';
import { Terminal, Shield, Radio } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-morse-hacker-dimGreen bg-morse-hacker-bg/50 backdrop-blur-sm">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="h-8 w-8 text-morse-hacker-green neon-text" />
            <h1 className="text-2xl font-bold tracking-tight neon-text">CIPHER//MORSE</h1>
          </div>
          <div className="flex items-center gap-4">
            <Shield className="h-6 w-6 text-morse-hacker-dimGreen animate-pulse neon-text" />
            <Radio className="h-6 w-6 text-morse-hacker-dimGreen animate-pulse neon-text" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
