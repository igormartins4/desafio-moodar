import { useState } from "react";

export function CheckboxDestaque(props) {
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    setChecked((prevState) => !checked);
  }

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
