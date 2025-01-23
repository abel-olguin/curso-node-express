export const toCamelCase = (str: string) => {
  return str
    .replace(/^\/|\/$/g, '')
    .split(/[-_\/]/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return (
        word.charAt(0).toUpperCase() +
        word.slice(1)
      );
    })
    .join('');
};