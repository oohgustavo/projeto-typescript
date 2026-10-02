import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Exercício 4 - App Router',
  description: 'Trabalho de Rotas e Navegação Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main style={{ padding: '24px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}