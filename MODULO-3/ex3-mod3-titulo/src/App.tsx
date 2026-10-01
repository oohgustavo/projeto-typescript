import { Formulario } from "./components/Formulario";

export default function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h2>Exercício 3 — Título Dinâmico</h2>
      <p>Escreva algo no campo "Nome" e repare no título do separador do seu navegador!</p>
      <Formulario />
    </main>
  );
}