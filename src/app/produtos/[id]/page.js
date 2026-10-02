import Link from 'next/link';

export default async function DetalheProdutoPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  return (
    <section>
      <h1>Detalhes do Produto</h1>
      <p style={{ margin: '12px 0' }}>Exibindo detalhes do produto número: {id}</p>

      <div style={{ marginTop: '20px' }}>
        <Link
          href="/produtos"
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Voltar para Produtos
        </Link>
      </div>
    </section>
  );
}