
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CCodeDisplay: React.FC = () => {
  const navigate = useNavigate();

  const handleViewCode = () => {
    navigate('/c-code');
  };

  return (
    <Button 
      onClick={handleViewCode}
      size="lg"
      variant="outline"
      className="bg-morse-hacker-green hover:bg-morse-hacker-dimGreen text-black font-bold neon-border"
    >
      <Code className="mr-2 h-5 w-5" />
      View Original C Code
    </Button>
  );
};

export default CCodeDisplay;
