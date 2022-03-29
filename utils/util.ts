export function firstLetterToUppercase(word: string) {
  return [...Array.from(word[0].toUpperCase()), word.slice(1)];
}
