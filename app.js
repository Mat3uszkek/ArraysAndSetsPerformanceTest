function generateUniqueChars(n) {
  let output = '';
  for (let i = 0; i < n; i++) {
      output += String.fromCharCode('a'.charCodeAt(0) + i);
  }
  return output;
}

function benchmark(n) {
  const uniqueChars = generateUniqueChars(n);
  const set = new Set(uniqueChars);
  const array = Array.from(uniqueChars);

  console.time('Set Lookup');
  for (let char of uniqueChars) {
      set.has(char);
  }
  console.timeEnd('Set Lookup');

  console.time('Array Lookup');
  for (let char of uniqueChars) {
      array.includes(char);
  }
  console.timeEnd('Array Lookup');
}

benchmark(15);
