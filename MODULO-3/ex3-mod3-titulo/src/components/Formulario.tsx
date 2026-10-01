import { useState, useEffect } from "react";

export function Formulario() {
  // Passo 1: Reaproveitar o estado do Exercício 2
  const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });

  function atualizarCampo(campo: "nome" | "email" | "mensagem", valor: string) {
    setDados({ ...dados, [campo]: valor });
  }

  // Passo 2: Adicionar o useEffect com dados.nome no array de dependências
  useEffect(() => {
    document.title = dados.nome 
      ? `Digitando: ${dados.nome}` 
      : "Formulario de Contato";
  }, [dados.nome]); // Apenas o nome engatilha este efeito[cite: 14]

  return (
    <div style={{ maxWidth: "400px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
    </div>
  );
}