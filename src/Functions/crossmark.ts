import { IForgeFunction } from "@tryforge/forgescript";

/**
 * Represents a Forge function that retrieves the 'crossmark' emoji
 * from the application's built-in emoji set.
 *
 * @implements {IForgeFunction}
 * @property {string} name - The name of the function, set to 'crossmark'.
 * @property {string} code - The ForgeScript code that returns the 'crossmark' emoji.
 *
 * @remarks
 * This function uses the `$findApplicationEmoji` ForgeScript command to locate
 * the emoji by its name and returns it in the specified format.
 *
 * @example
 * // Example usage in a ForgeScript environment:
 * $invokeFunction[crossmark]
 * // Returns: <:crossmark:emoji_id>
*/
const CrossmarkFunction: IForgeFunction = {
  name: 'crossmark',
  code: `$return[<:crossmark:$findApplicationEmoji[crossmark]>] `
};

export default CrossmarkFunction;