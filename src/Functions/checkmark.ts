import { IForgeFunction } from "@tryforge/forgescript";

/**
 * Fetch the 'checkmark' emoji from the app's built-in emojis.
 * @returns ApplicationEmoji
*/
const CheckmarkFunction: IForgeFunction = {
  name: 'checkmark',
  code: `$return[<:checkmark:$findApplicationEmoji[checkmark]>]`
};

export default CheckmarkFunction;