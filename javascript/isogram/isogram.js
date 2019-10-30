export const isIsogram = word => {
  return word.toLowerCase().split('').filter(l => l.search(/[a-z]/) >= 0).length === new Set([...word.toLowerCase().split('').filter(l => l.search(/[a-z]/) >= 0)]).size
};
