function haveLocalStorage() {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function haveSpeechSynthesis() {
  if ('speechSynthesis' in window) return true;
  return false;
}

export {
  haveLocalStorage,
  haveSpeechSynthesis,
};
