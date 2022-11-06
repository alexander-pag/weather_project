export function UpperCase(initWord) {
  return initWord.replace(/(^\w{1})|(\s+\w{1})/g, (word) => word.toUpperCase());
}
