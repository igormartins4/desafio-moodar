import "./style.scss";

export function RowTable(props) {
  const columnName1 = `${props.row}-ver-listagem`;
  const columnName2 = `${props.row}-ver-detalhes`;
  const columnName3 = `${props.row}-criar`;
  const columnName4 = `${props.row}-editar`;
  const columnName5 = `${props.row}-deletar`;

  return (
    <div className="container">
      <tr>
        <td>
          <span>{props.row}</span>
        </td>
        <td>
          <label for={columnName1}>
            <input type="checkbox" id={columnName1} name={columnName1} />
          </label>
        </td>
        <td>
          <label for={columnName2}>
            <input type="checkbox" id={columnName2} name={columnName2} />
          </label>
        </td>
        <td>
          <label for={columnName3}>
            <input type="checkbox" id={columnName3} name={columnName3} />
          </label>
        </td>
        <td>
          <label for={columnName4}>
            <input type="checkbox" id={columnName4} name={columnName4} />
          </label>
        </td>
        <td>
          <label for={columnName5}>
            <input type="checkbox" id={columnName5} name={columnName5} />
          </label>
        </td>
      </tr>
    </div>
  );
}
