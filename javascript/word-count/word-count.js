export class Words {
  count(phrase) {
    let counts = {};
    phrase = phrase.trim().replace(/\s+/g, ' ');
    const words = [...phrase.toLowerCase().split(' ')];
    new Set([...words]).forEach(uniqueWord => {
      counts[uniqueWord] = words.reduce((acc, w) => acc + (uniqueWord === w), 0);
    });
    return counts;
  }
}
