import type { ReactNode } from "react";

interface CardProps {
  titulo: string;
  children: ReactNode;
}

export function Card({ titulo, children }: CardProps) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", backgroundColor: "#fff" }}>
      <h3 style={{ marginTop: 0 }}>{titulo}</h3>
      {children}
    </div>
  );
}