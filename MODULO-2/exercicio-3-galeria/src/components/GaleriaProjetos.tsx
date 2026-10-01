import { Card } from "./Card";

// Passo 1: Definir o tipo Projeto com os campos solicitados
export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  links: string;
}

interface GaleriaProjetosProps {
  projetos: Projeto[];
}

export function GaleriaProjetos({ projetos }: GaleriaProjetosProps) {
  // Passo 2: Variável fixa para simular o filtro[cite: 17]
  const filtroAtual: string = "React";

  const projetosFiltrados = projetos.filter(
    (p) => filtroAtual === "Todos" || p.tecnologias.includes(filtroAtual)
  ); //[cite: 17]

  // Passo 3: Renderizar a lista filtrada como grid de Card[cite: 17]
  return (
    <div>
      <p style={{ marginBottom: "20px" }}>Filtro atual: <strong>{filtroAtual}</strong></p>
      
      {/* Usando CSS Grid inline para organizar os cards lado a lado */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
        {projetosFiltrados.map((projeto) => (
          <Card key={projeto.id} titulo={projeto.titulo}>
            <p>{projeto.descricao}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}