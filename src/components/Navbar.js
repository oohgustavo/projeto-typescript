import Link from 'next/link';

export default function Navbar() {
  const linkStyle = {
    color: '#1a1a1a',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '6px 12px',
    borderRadius: '4px',
    backgroundColor: '#ffffff'
  };

  return (
    <nav
      style={{
        padding: '16px 24px',
        backgroundColor: '#e5e7eb',
        display: 'flex',
        gap: '12px',
        borderBottom: '2px solid #d1d5db'
      }}
    >
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/sobre" style={linkStyle}>
        Sobre
      </Link>
      <Link href="/produtos" style={linkStyle}>
        Produtos
      </Link>
    </nav>
  );
}