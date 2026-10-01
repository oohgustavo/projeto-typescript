import { GaleriaProjetos, type Projeto } from "./components/GaleriaProjetos";

export default function App() {
  const meusProjetos: Projeto[] = [
    {
      id: 1,
      titulo: "API de Tarefas",
      descricao: "Uma API RESTful criada nas aulas de programação.",
      imagem: "",
      tecnologias: ["Node.js", "Express", "SQLite"], // Não tem React, será ocultado
      links: "github.com/exemplo1"
    },
    {
      id: 2,
      titulo: "Sistema de Vendas",
      descricao: "Dashboard para controle de vendas em tempo real.",
      imagem: "",
      tecnologias: ["React", "TypeScript", "Tailwind"], // Tem React, vai aparecer
      links: "github.com/exemplo2"
    },
    {
      id: 3,
      titulo: "Portfólio Pessoal",
      descricao: "Meu portfólio desenvolvido como rascunho.",
      imagem: "",
      tecnologias: ["React", "CSS"], // Tem React, vai aparecer
      links: "github.com/exemplo3"
    }
  ];

  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <h2>Exercício 3 — Galeria de Projetos</h2>
      <GaleriaProjetos projetos={meusProjetos} />
    </main>
  );
}