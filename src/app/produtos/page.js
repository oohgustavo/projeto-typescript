import Link from 'next/link';

export default function ProdutosPage() {
  return (
    <section>
      <h1>Lista de Produtos</h1>
      <p style={{ margin: '12px 0' }}>Escolha um produto para ver os detalhes:</p>
      <ul>
        <li style={{ marginBottom: '8px' }}>
          <Link href="/produtos/101">Ver Produto 101</Link>
        </li>
        <li style={{ marginBottom: '8px' }}>
          <Link href="/produtos/102">Ver Produto 102</Link>
        </li>
      </ul>
    </section>
  );
}