// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { getWeekOfMonth as fn } from "../getWeekOfMonth.js";
import { convertToFP } from "./_lib/convertToFP.js";

export const getWeekOfMonth = convertToFP(fn, 1);

// Fallback for modularized imports:
export default getWeekOfMonth;