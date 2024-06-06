//6.1
function removeCharacters(str, charsToRemove) {
    let pattern = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    return str.replace(pattern, '');
  }
  
  const inputString = prompt("Enter a string:");
  const charsToRemoveInput = prompt("Enter the characters to delete, separated by dots:");
  const charsToRemove = charsToRemoveInput.split('.');
  
  const resultString = removeCharacters(inputString, charsToRemove);
  console.log(`Результат: ${resultString}`);
  