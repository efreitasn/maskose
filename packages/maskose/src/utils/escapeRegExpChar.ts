// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
/**
 * Escape a string to be used in a RegExp.
 * @param str The string to be escaped
 */
export default function escapeRegExpChar(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}