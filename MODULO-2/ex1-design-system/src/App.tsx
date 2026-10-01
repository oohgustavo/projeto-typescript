import React from 'react';
import { Button, Badge, Alert, Card } from './components/DesignSystem';

export function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Teste do Design System</h1>

      {/* Teste do Botão */}
      <div style={{ marginBottom: '10px' }}>
        <Button texto="Salvar Alterações" variante="primary" onClick={() => alert('Clicado!')} />
      </div>

      {/* Teste do Badge */}
      <div style={{ marginBottom: '10px' }}>
        <Badge texto="Ativo" cor="success" />
      </div>

      {/* Teste do Alert */}
      <div style={{ marginBottom: '10px' }}>
        <Alert mensagem="Operação realizada com sucesso!" tipo="success" />
      </div>

      {/* Teste do Card */}
      <Card footer={<span>Rodapé do Card</span>}>
        <p>Este é o conteúdo dentro do Card.</p>
      </Card>
    </div>
  );
}

export default App;