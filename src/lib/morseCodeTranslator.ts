
// Morse code mappings
const morseCodeMap: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..'
};

// Reverse mapping for Morse to text
const reverseMap: Record<string, string> = Object.entries(morseCodeMap).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [value]: key
  }), 
  {}
);

/**
 * Converts text to Morse code
 */
export function textToMorse(text: string): string {
  if (!text) return '';
  
  return text
    .toUpperCase()
    .split('')
    .map(char => {
      if (char === ' ') return '  ';
      return morseCodeMap[char] ? morseCodeMap[char] + ' ' : '';
    })
    .join('')
    .trim();
}

/**
 * Converts Morse code to text
 */
export function morseToText(morse: string): string {
  if (!morse) return '';
  
  const words = morse.split('   '); // 3 spaces between words
  
  return words
    .map(word => 
      word
        .split(' ')
        .map(symbol => reverseMap[symbol] || '')
        .join('')
    )
    .join(' ');
}

/**
 * Converts Morse code to a visual representation with dots and dashes
 */
export function morseToVisual(morse: string): string[] {
  if (!morse) return [];
  
  return morse
    .split('')
    .map(char => {
      if (char === '.') return 'dot';
      if (char === '-') return 'dash';
      if (char === ' ') return 'space';
      return '';
    })
    .filter(item => item !== '');
}

/**
 * Plays Morse code audio
 */
export function playMorseCode(morse: string): void {
  const context = new (window.AudioContext || (window as any).webkitAudioContext)();
  const dotDuration = 60; // milliseconds
  
  const createTone = (duration: number, time: number) => {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 700;
    
    oscillator.start(time);
    oscillator.stop(time + duration / 1000);
  };
  
  let currentTime = context.currentTime;
  
  for (const char of morse) {
    if (char === '.') {
      createTone(dotDuration, currentTime);
      currentTime += dotDuration / 1000;
    } else if (char === '-') {
      createTone(dotDuration * 3, currentTime);
      currentTime += (dotDuration * 3) / 1000;
    }
    
    // Add spacing
    if (char === ' ') {
      currentTime += (dotDuration * 3) / 1000; // Space between words
    } else {
      currentTime += dotDuration / 1000; // Space between symbols
    }
  }
}
