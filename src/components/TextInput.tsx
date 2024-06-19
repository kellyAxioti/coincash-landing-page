import React from "react";
import Button from "./Button";

export default function TextInput({
  label,
  input,
  setInput,
}: {
  label: string;
  input?: string;
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const [hasSubmitted, setHasSubmitted] = React.useState<boolean>(false);
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHasSubmitted(false);
    setInput(event.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    setHasSubmitted(true);
  }
  return (
    <div className="footer-input-container">
      <div className="input-container">
        <input type="text" placeholder={label} onChange={handleInputChange} />
        <Button label="Submit" variant="input" onClick={handleSubmit}></Button>
      </div>
      {hasSubmitted && (
        <div>Thank you for signing up with this email: {input}!</div>
      )}
    </div>
  );
}
