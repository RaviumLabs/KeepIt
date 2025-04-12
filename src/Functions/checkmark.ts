import { IForgeFunction } from "@tryforge/forgescript";

const Function: IForgeFunction = {
  name: 'checkmark',
  params: [],
  code: `
    $return[<:checkmark:$findApplicationEmoji[checkmark]>]
  `
};

export default Function;