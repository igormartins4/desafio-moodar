import { useState } from "react";

export function Checkbox(props) {
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    setChecked((prevState) => !checked);

    const checkboxName = props.name.split("-");

    if (
      checkboxName[0] === "analise" ||
      checkboxName[0] === "contas" ||
      checkboxName[0] === "customização" ||
      checkboxName[0] === "financeiro"
    ) {


      if (checked === false) {
        setChecked(true);
        console.log(checked);
        return checked === true;
      } else if (checked === true) {
        setChecked(false);
        return checked === false;
      }
    }
  }

  console.log(checked);

  return (
    <td>
      <label htmlFor={props.name}>
        <input
          type="checkbox"
          id={props.name}
          name={props.name}
          defaultChecked={checked}
          onChange={toggleChecked}
        />
      </label>
    </td>
  );
}
