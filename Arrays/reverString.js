function reverse(str) {
  if (!str || str.length <= 2 || typeof str !== 'string') {
    return 'hmm thats is not good';
  }

  const backwards = [];
  const totalItems = str.length -1;

  for(let i = totalItems; i >= 0; i--) { 
    backwards.push(str[i]);
  }
  console.log(backwards)
  return backwards.join('')
}

reverse('oie')