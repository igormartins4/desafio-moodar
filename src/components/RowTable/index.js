import React from "react";
import { Checkbox } from "../Checkbox/index";
import { CheckboxDestaque } from "../CheckboxDestaque/index";

import "./style.scss";
import { formataCaracteres } from "../../utils/formataCaracteres";

export function RowTable({ row, principal }) {
  const columnNameListagem = formataCaracteres(`${row}-ver-listagem`);
  const columnNameDetalhes = formataCaracteres(`${row}-ver-detalhes`);
  const columnNameCriar = formataCaracteres(`${row}-criar`);
  const columnNameEditar = formataCaracteres(`${row}-editar`);
  const columnNameDeletar = formataCaracteres(`${row}-deletar`);

  return (
    <tr className="container">
      <td>
        <span>{row}</span>
      </td>
      <Checkbox name={columnNameListagem} />
      <Checkbox name={columnNameDetalhes} />
      <Checkbox name={columnNameCriar} />
      <Checkbox name={columnNameEditar} />
      <Checkbox name={columnNameDeletar} />
    </tr>
    //<CheckboxDestaque name={principal} />
  );
}
