import { IForgeFunction } from "@tryforge/forgescript";

/**
 * Fetch the 'crossmark' emoji from the app's built-in emojis.
 * @returns - ApplicationEmoji
*/
const Function: IForgeFunction = {
  name: 'crossmark',
  code: `$return[<:crossmark:$findApplicationEmoji[crossmark]>] `
};

export default Function;