import React, { useState } from "react";

import "./style.scss";
import { formataCaracteres } from "../../utils/formataCaracteres";


export function RowTable(props) {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked((prevState) =>  !prevState);
    console.log(checked);
  };

  const columnName1 = formataCaracteres(`${props.row}-ver-listagem`);
  const columnName2 = formataCaracteres(`${props.row}-ver-detalhes`);
  const columnName3 = formataCaracteres(`${props.row}-criar`);
  const columnName4 = formataCaracteres(`${props.row}-editar`);
  const columnName5 = formataCaracteres(`${props.row}-deletar`);

  return (
    <tr className="container">
      <td>
        <span>{props.row}</span>
      </td>
      <td>
        <label htmlFor={columnName1}></label>
      </td>
      <td>
        <label htmlFor={columnName2}>
          <input
            type="checkbox"
            id={columnName2}
            name={columnName2}
            defaultChecked={checked}
            onChange={handleOnChange}
          />
        </label>
      </td>
      <td>
        <label htmlFor={columnName3}>
          <input
            type="checkbox"
            id={columnName3}
            name={columnName3}
            defaultChecked={checked}
            onChange={handleOnChange}
          />
        </label>
      </td>
      <td>
        <label htmlFor={columnName4}>
          <input
            type="checkbox"
            id={columnName4}
            name={columnName4}
            defaultChecked={checked}
            onChange={handleOnChange}
          />
        </label>
      </td>
      <td>
        <label htmlFor={columnName5}>
          <input
            type="checkbox"
            id={columnName5}
            name={columnName5}
            defaultChecked={checked}
            onChange={handleOnChange}
          />
        </label>
      </td>
    </tr>
  );
}
