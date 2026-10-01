import { useState } from "react";

export function Contador() {
  // Passo 1: Criar o estado inicial com useState(0)
  const [contagem, setContagem] = useState(0);

  // Passo 2: No botão de incrementar, verificar o limite (< 10) antes de atualizar[cite: 12]
  function incrementar() {
    if (contagem < 10) setContagem(contagem + 1);
  }

  // Passo 3: Repetir a mesma lógica no botão de decrementar, trocando o limite para > 0[cite: 12]
  function decrementar() {
    if (contagem > 0) setContagem(contagem - 1);
  }

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "20px" }}>
      <button onClick={decrementar} style={{ padding: "8px 16px", fontSize: "18px" }}>-</button>
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>{contagem}</span>
      <button onClick={incrementar} style={{ padding: "8px 16px", fontSize: "18px" }}>+</button>
    </div>
  );
}