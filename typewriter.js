const typewriter = function(str, delay) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    setTimeout(() => process.stdout.write(ch), delay * (i + 1));
  }
  setTimeout(() => process.stdout.write('\n'), delay * (str.length + 1));
};
