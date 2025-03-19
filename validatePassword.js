/**
 * Validate a password based on specific requirements.
 *
 * @param {String} password - The password to validate.
 * @param {Boolean} isMt5 - Whether the password is for an MT5 account (default: true).
 * @throws {Error} - Throws an error if the password does not meet the requirements.
 */

export function validatePassword(password, isMt5 = true) {
  const minLength = isMt5 ? 8 : 5
  //
  // The client master password is subject to all of the following requirements:
  //
  //  1. BDSwiss and Forex account password requirements:
  //      -- between 5(for Mt4) or 8(for Mt5) to 15 chars long
  //      -- at least one letter (for Mt4)
  //      -- at least one lower case letter (for Mt5)
  //      -- at least one upper case letter (for Mt5)
  //      -- at least one digit
  //      -- at least one special character (for Mt5)
  //
  //  2. Spot Options account password requirements:
  //      -- none
  //
  //  3. Cuboid account password requirements:
  //      -- ignored
  //
  if (!password) {
    throw new Error(passwordErrors.isRequired.message)
  }
  if (password.length < minLength) {
    throw new Error(passwordErrors[`isLessThan${minLength}Chars`]?.message)
  }
  if (password.length > 15) {
    throw new Error(passwordErrors.isMoreThan15Chars.message)
  }
  if (isMt5) {
    if (!/[a-z]/.test(password)) {
      throw new Error(passwordErrors.noLowerCaseLetter.message)
    }
    if (!/[A-Z]/.test(password)) {
      throw new Error(passwordErrors.noUpperCaseLetter.message)
    }
  } else {
    if (!/[a-zA-Z]/.test(password)) {
      throw new Error(passwordErrors.noAnyLetter.message)
    }
  }

  if (!/[0-9]/.test(password)) {
    throw new Error(passwordErrors.noDigit.message)
  }
  if (isMt5 && !/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/.test(password)) {
    throw new Error(passwordErrors.noSpecialCharacter.message)
  }
}
