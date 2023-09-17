export const alphanumericRegex = /^[a-zA-Z0-9_-]+$/;

export function isAlphanumeric(str: string) {
  return alphanumericRegex.test(str);
}
