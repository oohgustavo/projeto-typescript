export function StatusAluno({ media }: { media: number }) {
  const estaAprovado = media >= 7;
  
  return (
    <span style={{
      backgroundColor: estaAprovado ? "#16a34a" : "#dc2626",
      color: "#fff",
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "bold"
    }}>
      {estaAprovado ? "Aprovado" : "Reprovado"}
    </span>
  );
}