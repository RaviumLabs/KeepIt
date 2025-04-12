import { IForgeFunction } from "@tryforge/forgescript";

const Function: IForgeFunction = {
  name: 'interactions',
  params: [],
  code: `
    $addActionRow
    $addButton[$get[MessageLink];Jump to message;Link]
    $addButton[tag;Tags;Secondary;🏷️;true]
    $addButton[category;Category;Secondary;🗃;true]
    $addActionRow
    $addButton[delete;Delete;Danger;🗑️]
    $addButton[details_$option[message];Details;Secondary;📄]
  `
};

export default Function;