import { constructNow } from "./constructNow.js";
import { isSameSecond } from "./isSameSecond.js";

/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * const result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
export function isThisSecond(date) {
  return isSameSecond(date, constructNow(date));
}

// Fallback for modularized imports:
export default isThisSecond;