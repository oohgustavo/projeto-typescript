import { StatusAluno } from "./StatusAluno";

export interface Aluno {
  id: number;
  nome: string;
  media: number;
}

interface TabelaAlunosProps {
  alunos: Aluno[];
}

export function TabelaAlunos({ alunos }: TabelaAlunosProps) {
  return (
    <table border={1} style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead style={{ backgroundColor: "#f3f4f6" }}>
        <tr>
          <th style={{ padding: "12px", textAlign: "left" }}>Nome</th>
          <th style={{ padding: "12px" }}>Média</th>
          <th style={{ padding: "12px" }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno) => (
          <tr key={aluno.id}>
            <td style={{ padding: "12px" }}>{aluno.nome}</td>
            <td style={{ padding: "12px", textAlign: "center" }}>{aluno.media}</td>
            <td style={{ padding: "12px", textAlign: "center" }}>
              <StatusAluno media={aluno.media} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}