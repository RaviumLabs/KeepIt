import { IForgeFunction } from "@tryforge/forgescript";

/**
 * Represents a Forge function named 'checkmark' that retrieves the 'checkmark' emoji
 * from the application's built-in emojis. The function uses the `$findApplicationEmoji`
 * command to locate the emoji by its name and returns it in a specific format.
 * 
 * @implements {IForgeFunction}
 * @property {string} name - The name of the function, which is 'checkmark'.
 * @property {string} code - The code executed by the function, which fetches and
 * returns the 'checkmark' emoji in the format `<:checkmark:emoji_id>`.
 * 
 * @example
 * // Example usage in a ForgeScript environment:
 * const result = CheckmarkFunction.code;
 * // result: "<:checkmark:emoji_id>"
 * 
 * @returns {string} The formatted 'checkmark' emoji string.
*/
const CheckmarkFunction: IForgeFunction = {
  name: 'checkmark',
  code: `$return[<:checkmark:$findApplicationEmoji[checkmark]>]`
};

export default CheckmarkFunction;