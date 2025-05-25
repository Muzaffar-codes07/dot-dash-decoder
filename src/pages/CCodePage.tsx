
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CCodePage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const cCode = `#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_INPUT 1000

const char *morse[] = {
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",  // A-J
    "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", // K-T
    "..-", "...-", ".--", "-..-", "-.--", "--..", // U-Z
    "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", // 0-9
    ".-.-.-", "--..--", "..--.." // . , ?
};

const char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?";

void textToMorse(const char *text) {
    for (int i = 0; text[i] !='\\0'; i++) {
        if (text[i] == ' ') {
            printf("  ");
            continue;
        }
        char *ptr = strchr(alphabet, toupper(text[i]));
        if (ptr) {
            printf("%s ", morse[ptr - alphabet]);
        }
    }
    printf("\\n");
}

void morseToText(const char *morseCode) {
    char buffer[10];
    int index = 0;
    
    for (int i = 0; morseCode[i] != '\\0'; i++) {
        if (morseCode[i] != ' ') {
            buffer[index++] = morseCode[i];
            buffer[index] = '\\0';
        } else {
            if (index > 0) {
                for (int j = 0; j < sizeof(morse) / sizeof(morse[0]); j++) {
                    if (strcmp(buffer, morse[j]) == 0) {
                        printf("%c", alphabet[j]);
                        break;
                    }
                }
                index = 0;
            }
            if (morseCode[i + 1] == ' ') {
                printf(" ");
                i++;
            }
        }
    }
    if (index > 0) {
        for (int j = 0; j < sizeof(morse) / sizeof(morse[0]); j++) {
            if (strcmp(buffer, morse[j]) == 0) {
                printf("%c", alphabet[j]);
                break;
            }
        }
    }
    printf("\\n");
}

int main() {
    char input[MAX_INPUT];
    int choice;
    
    while (1) {
        printf("Choose an option:\\n1. Convert Text to Morse\\n2. Convert Morse to Text\\n3. Exit\\n");
        scanf("%d", &choice);
        getchar();
        
        if (choice == 3) break;
        
        printf("Enter input: ");
        fgets(input, MAX_INPUT, stdin);
        input[strcspn(input, "\\n")] = 0;
        
        if (choice == 1) {
            textToMorse(input);
        } else if (choice == 2) {
            morseToText(input);
        } else {
            printf("Invalid choice.\\n");
        }
    }
    return 0;
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cCode);
    toast({
      title: "Code copied to clipboard",
      description: "The C code has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl space-y-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Original C Code</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is the original C implementation of the Morse code converter. 
              Our web application provides the same functionality in a modern, interactive format.
            </p>
          </div>

          <Card className="neon-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl">morse_converter.c</CardTitle>
              <Button 
                variant="outline" 
                onClick={handleCopyCode}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy Code
              </Button>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-6 overflow-auto">
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  <code>{cCode}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How to Compile</h3>
                <div className="bg-muted rounded p-3 font-mono text-sm">
                  gcc morse_converter.c -o morse_converter
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How to Run</h3>
                <div className="bg-muted rounded p-3 font-mono text-sm">
                  ./morse_converter
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Converts text to Morse code using standardized dot-dash patterns</li>
                <li>• Converts Morse code back to readable text</li>
                <li>• Supports letters A-Z, numbers 0-9, and basic punctuation</li>
                <li>• Interactive command-line interface with menu options</li>
                <li>• Proper spacing handling for words and characters</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CCodePage;
