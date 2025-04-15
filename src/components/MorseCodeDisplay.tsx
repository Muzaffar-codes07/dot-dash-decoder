
import React from 'react';
import { morseToVisual } from '@/lib/morseCodeTranslator';

interface MorseCodeDisplayProps {
  morseCode: string;
}

const MorseCodeDisplay: React.FC<MorseCodeDisplayProps> = ({ morseCode }) => {
  const visualElements = morseToVisual(morseCode);
  
  if (!morseCode) {
    return (
      <div className="h-16 flex items-center justify-center text-muted-foreground">
        <p>Morse code visualization will appear here</p>
      </div>
    );
  }

  return (
    <div className="bg-muted p-4 rounded-md min-h-16 flex items-center flex-wrap gap-2">
      {visualElements.map((element, index) => {
        if (element === 'dot') {
          return <span key={index} className="morse-dot"></span>;
        } else if (element === 'dash') {
          return <span key={index} className="morse-dash"></span>;
        } else if (element === 'space') {
          return <span key={index} className="morse-space"></span>;
        }
        return null;
      })}
    </div>
  );
};

export default MorseCodeDisplay;
