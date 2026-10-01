import { TabelaAlunos, type Aluno } from "./components/TabelaAlunos";

export default function App() {
  const listaDeAlunos: Aluno[] = [
    { id: 1, nome: "Ana Silva", media: 8.5 },
    { id: 2, nome: "Bruno Costa", media: 5.0 },
    { id: 3, nome: "Carla Dias", media: 9.0 },
    { id: 4, nome: "Diogo Martins", media: 6.5 }
  ];

  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif", maxWidth: "600px" }}>
      <h2>Exercício 2 — Lista dinâmica</h2>
      <TabelaAlunos alunos={listaDeAlunos} />
    </main>
  );
}