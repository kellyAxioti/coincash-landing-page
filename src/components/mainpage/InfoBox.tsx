export default function InfoBox({ label }: { label: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        textWrap: "wrap",
        backgroundColor: "#0066ff",
        height: "fit-content",
        color: "white",
      }}
    >
      <div style={{ padding: "10px" }}>{label}</div>
    </div>
  );
}
