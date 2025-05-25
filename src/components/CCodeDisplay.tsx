
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, X } from 'lucide-react';

const CCodeDisplay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        size="lg"
        variant="outline"
        className="bg-morse-hacker-green hover:bg-morse-hacker-dimGreen text-black font-bold neon-border"
      >
        <Code className="mr-2 h-5 w-5" />
        View Original C Code
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl max-h-[80vh] overflow-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Original C Code</CardTitle>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-muted p-4 rounded-md overflow-auto">
                <code>{cCode}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CCodeDisplay;
