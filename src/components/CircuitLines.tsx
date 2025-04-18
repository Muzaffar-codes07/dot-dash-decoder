
import React, { useEffect, useState } from 'react';

const CircuitLines: React.FC = () => {
  const [lines, setLines] = useState<{ id: number; top: number; delay: number }[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        delay: Math.random() * 5
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
            animationDelay: `${line.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default CircuitLines;
