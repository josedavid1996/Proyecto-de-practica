//Nico => [N,i,c,o] => string => string[]
//[N,i,c,o] => Nico => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split(',');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Nico');
const rtaStr = parseStr(['N', 'i', 'c', 'o']);
const rtaNumber = parseStr(87987);

rtaArray.length;
rtaStr.toLocaleLowerCase();
console.log(rtaArray);
console.log(rtaStr);
console.log(rtaNumber);
