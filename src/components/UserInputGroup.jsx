import { useState } from "react";

export default function UserInputGroup({
  label,
  inputName,
  onValueChange,
  value,
}) {
  return (
    <p>
      <label>{label}</label>
      <input
        value={value}
        type="number"
        onChange={(e) => onValueChange(inputName, Number(e.target.value))}
        required
      />
    </p>
  );
}
