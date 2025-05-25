import React from 'react';
import Header from '@/components/Header';
import MorseCodeConverter from '@/components/MorseCodeConverter';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import CCodeDisplay from '@/components/CCodeDisplay';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-5xl space-y-12">
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Dot Dash Decoder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Translate between text and Morse code instantly. Morse code uses dots (.) and dashes (-) 
              to represent letters and numbers in a standardized sequence.
            </p>
            <CCodeDisplay />
          </section>
          
          <div id="morse-converter">
            <MorseCodeConverter />
          </div>
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">What is Morse Code?</h3>
                <p className="text-sm text-muted-foreground">
                  Morse code is a method of transmitting text information using standardized sequences of dots and dashes,
                  originally developed for telegraph communications.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Simply type your text in the input field to see it converted to Morse code in real-time,
                  or enter Morse code to translate it back to text.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Pro Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Use the audio feature to hear the Morse code pattern. One space separates symbols, 
                  three spaces separate words.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
