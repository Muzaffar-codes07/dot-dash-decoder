
import React, { useEffect, useState } from 'react';

const CircuitLines: React.FC = () => {
  const [lines, setLines] = useState<{ id: number; top: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const colors = [
        'rgba(0, 255, 65, 0.2)',    // Bright green
        'rgba(30, 174, 219, 0.2)',  // Bright blue
        'rgba(139, 92, 246, 0.2)',  // Vivid purple
      ];

      const newLines = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setLines(newLines);
    };

    generateLines();
    const interval = setInterval(generateLines, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {lines.map(line => (
        <div
          key={line.id}
          className="circuit-line"
          style={{
            top: `${line.top}%`,
            animationDelay: `${line.delay}s`,
            backgroundColor: line.color
          }}
        />
      ))}
    </div>
  );
};

export default CircuitLines;
