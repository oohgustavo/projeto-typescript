import React, { ReactNode } from 'react';

// ==========================================
// 1. Componente Button e a sua Interface
// ==========================================
interface ButtonProps {
  texto: string;
  variante: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export function Button({ texto, variante, onClick }: ButtonProps) {
  return (
    <button className={`btn btn-${variante}`} onClick={onClick}>
      {texto}
    </button>
  );
}

// ==========================================
// 2. Componentes Badge, Avatar e Alert
// ==========================================
interface BadgeProps {
  texto: string;
  cor: "success" | "warning" | "info" | "error";
}

export function Badge({ texto, cor }: BadgeProps) {
  return <span className={`badge badge-${cor}`}>{texto}</span>;
}

interface AvatarProps {
  nome: string;
  urlImagem: string;
}

export function Avatar({ nome, urlImagem }: AvatarProps) {
  return <img src={urlImagem} alt={`Avatar de ${nome}`} className="avatar-img" title={nome} />;
}

interface AlertProps {
  mensagem: string;
  tipo: "success" | "danger" | "warning";
}

export function Alert({ mensagem, tipo }: AlertProps) {
  return <div className={`alert alert-${tipo}`}>{mensagem}</div>;
}

// ==========================================
// 3. Componente Card (com children e footer opcional)
// ==========================================
interface CardProps {
  children: ReactNode;
  footer?: ReactNode;
}

export function Card({ children, footer }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}