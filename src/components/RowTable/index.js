import React from "react";
import { Checkbox } from "../Checkbox/index";

import "./style.scss";
import { formataCaracteres } from "../../utils/formataCaracteres";

export function RowTable(props) {
  const columnNameListagem = formataCaracteres(`${props.row}-ver-listagem`);
  const columnNameDetalhes = formataCaracteres(`${props.row}-ver-detalhes`);
  const columnNameCriar = formataCaracteres(`${props.row}-criar`);
  const columnNameEditar = formataCaracteres(`${props.row}-editar`);
  const columnNameDeletar = formataCaracteres(`${props.row}-deletar`);

  return (
    <tr className="container">
      <td>
        <span>{props.row}</span>
      </td>
      <Checkbox name={columnNameListagem} />
      <Checkbox name={columnNameDetalhes} />
      <Checkbox name={columnNameCriar} />
      <Checkbox name={columnNameEditar} />
      <Checkbox name={columnNameDeletar} />
    </tr>
  );
}
