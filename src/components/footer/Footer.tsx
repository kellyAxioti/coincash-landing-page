import React from "react";
import FooterLayout from "../../layouts/FooterLayout";
import TextInput from "../TextInput";

export default function Footer() {
  const [input, setInput] = React.useState<string>();

  return (
    <FooterLayout>
      <h3 className="header" style={{ textAlign: "center" }}>
        Get started <div style={{ color: " rgba(0, 102, 255, 1)" }}>today</div>
      </h3>
      <p className="paragraph">
        Sing up to receive email updates on new products announcements, special
        promotions sales an more.
      </p>
      <TextInput
        label="Type your email here"
        input={input}
        setInput={setInput}
      />
    </FooterLayout>
  );
}
