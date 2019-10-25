function transform(old) {
  let n = {};
  Object.keys(old).forEach((value) => {
    old[value].forEach(letter => {
      n[letter.toLowerCase()] = Number(value);
    });
  });
  return n;
}

export { transform };