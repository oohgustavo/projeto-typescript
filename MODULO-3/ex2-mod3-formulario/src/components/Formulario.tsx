import { useState } from "react";

export function Formulario() {
  // Passo 1. Um único objeto de estado para os três campos[cite: 13]
  const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });

  // Passo 2. Uma função genérica de atualização, reaproveitada nos três campos[cite: 13]
  function atualizarCampo(campo: "nome" | "email" | "mensagem", valor: string) {
    setDados({ ...dados, [campo]: valor });
  }

  return (
    <div style={{ maxWidth: "400px", display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Campos de Input que disparam a função atualizarCampo onChange */}
      <input
        type="text"
        placeholder="O seu nome"
        value={dados.nome}
        onChange={(e) => atualizarCampo("nome", e.target.value)}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <input
        type="email"
        placeholder="O seu email"
        value={dados.email}
        onChange={(e) => atualizarCampo("email", e.target.value)}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <textarea
        placeholder="A sua mensagem"
        value={dados.mensagem}
        onChange={(e) => atualizarCampo("mensagem", e.target.value)}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", minHeight: "80px" }}
      />

      <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
        <h3 style={{ marginTop: 0 }}>Pré-visualização:</h3>
        {/* Passo 3. Exibir os valores em tempo real, lendo direto do objeto dados[cite: 13] */}
        <p><strong>Nome:</strong> {dados.nome}</p>
        <p><strong>Email:</strong> {dados.email}</p>
        <p><strong>Mensagem:</strong> {dados.mensagem}</p>
      </div>
    </div>
  );
}