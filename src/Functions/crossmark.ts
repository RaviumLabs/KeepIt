import { IForgeFunction } from "@tryforge/forgescript";

const Function: IForgeFunction = {
  name: 'crossmark',
  params: [],
  code: `
    $return[<:crossmark:$findApplicationEmoji[crossmark]>]
  `
};

export default Function;