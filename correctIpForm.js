import { Address4, Address6 } from 'ip-address';

// The function checks whether the provided IP address is valid.
// If valid, it returns the corrected format using `correctForm()`.
// If the value is invalid, it returns `null`.

/**
 * Returns the correct form of an address for both IPv4 and IPv6.
 *
 * @param {String} value - The IP address value.
 * @return {String|null} - The corrected IP address form or null.
 */
export function correctIpForm(value) {
  if (!value) return null;

  const address4 = new Address4(value);
  const address6 = new Address6(value);

  if (address4.isValid(value)) {
    return address4.correctForm();
  }
  if (address6.isValid(value)) {
    return address6.correctForm();
  }

  return value;
}
