// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
/**
 * Returns the provided string escaped to be used in a RegExp.
 */
export default function escapeRegExpChar(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}