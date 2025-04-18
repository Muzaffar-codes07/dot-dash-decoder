import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Copy, Volume2, Trash, ArrowRight } from 'lucide-react';
import MorseCodeDisplay from './MorseCodeDisplay';
import { textToMorse, morseToText, playMorseCode } from '@/lib/morseCodeTranslator';

const MorseCodeConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [morseCode, setMorseCode] = useState('');
  const [mode, setMode] = useState<'text-to-morse' | 'morse-to-text'>('text-to-morse');
  const { toast } = useToast();

  useEffect(() => {
    if (mode === 'text-to-morse' && text) {
      setMorseCode(textToMorse(text));
    } else if (mode === 'morse-to-text' && morseCode) {
      setText(morseToText(morseCode));
    }
  }, [text, morseCode, mode]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (mode === 'text-to-morse') {
      setText(e.target.value);
    } else {
      setMorseCode(e.target.value);
    }
  };

  const handleModeChange = (value: string) => {
    setMode(value as 'text-to-morse' | 'morse-to-text');
    setText('');
    setMorseCode('');
  };

  const handleCopyClick = () => {
    const textToCopy = mode === 'text-to-morse' ? morseCode : text;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard",
      description: "The content has been copied to your clipboard.",
    });
  };

  const handleClearClick = () => {
    setText('');
    setMorseCode('');
  };

  const handlePlayClick = () => {
    playMorseCode(morseCode);
    toast({
      title: "Playing Morse Code",
      description: "Listen carefully to the dots and dashes.",
    });
  };

  return (
    <Card className="w-full max-w-5xl neon-border bg-morse-hacker-bg/30 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold neon-text">Convert between Text and Morse Code</CardTitle>
        <CardDescription>
          Enter text or Morse code to translate between them instantly.
          Use dots (.) and dashes (-) for Morse code input.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="text-to-morse" onValueChange={handleModeChange}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="text-to-morse">Text to Morse</TabsTrigger>
            <TabsTrigger value="morse-to-text">Morse to Text</TabsTrigger>
          </TabsList>
          <TabsContent value="text-to-morse" className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Enter Text</label>
              <Textarea 
                placeholder="Type your message here..." 
                className="font-mono resize-none min-h-24"
                value={text}
                onChange={handleTextChange}
              />
            </div>
            <div className="flex justify-center py-2">
              <ArrowRight className="text-morse-blue h-8 w-8" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Morse Code Result</label>
              <Textarea 
                className="font-mono resize-none min-h-24"
                value={morseCode}
                readOnly
              />
            </div>
            <MorseCodeDisplay morseCode={morseCode} />
          </TabsContent>
          <TabsContent value="morse-to-text" className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Enter Morse Code</label>
              <Textarea 
                placeholder="Enter dots (.) and dashes (-) separated by spaces..." 
                className="font-mono resize-none min-h-24"
                value={morseCode}
                onChange={handleTextChange}
              />
            </div>
            <div className="flex justify-center py-2">
              <ArrowRight className="text-morse-blue h-8 w-8" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Text Result</label>
              <Textarea 
                className="font-mono resize-none min-h-24"
                value={text}
                readOnly
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="justify-between flex-wrap">
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleClearClick}>
            <Trash className="mr-2 h-4 w-4" />
            Clear
          </Button>
          <Button variant="outline" onClick={handleCopyClick}>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
        </div>
        {mode === 'text-to-morse' && (
          <Button onClick={handlePlayClick} className="bg-morse-navy hover:bg-morse-blue">
            <Volume2 className="mr-2 h-4 w-4" />
            Play Morse Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MorseCodeConverter;
