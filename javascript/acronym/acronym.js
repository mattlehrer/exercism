export const parse = phrase => 
  phrase.trim().replace(/_|-+/g, ' ').replace(/\s+/g, ' ').split(' ').reduce((res, w) => res = `${res}${w.toUpperCase().split('')[0]}`, '');
